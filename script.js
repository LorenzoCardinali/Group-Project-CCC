/*
################
### Web page ###
################
*/

const { CLIENT_RENEG_LIMIT } = require('tls');

window.console = {
    log: function (str) {
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("myLog").appendChild(node);
    }
}

//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

const buttonsArea = document.querySelector(".bottons-area"),
    startbutton = buttonsArea.querySelector(".start");

startbutton.onclick = () => {
    if (document.getElementById("myFile").textContent != "No file") {
        exec();
    } else {
        alert("No BPMN file loaded!");
    }
}

//if user click on the button then the input also clicked
button.onclick = () => {
    input.click();
}

//getting user select file and [0] this means if user select multiple files then we'll select only the first one
input.addEventListener("change", function () {
    file = this.files[0];
    document.getElementById("myFile").textContent = file.name;
    dropArea.classList.add("active");
});

//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    document.getElementById("myFile").textContent = file.name;
});

/*
######################
### Ros connection ###
######################
*/

var ros = new ROSLIB.Ros();

// If there is an error on the backend, an 'error' emit will be emitted.
ros.on('error', function (error) {
    console.log(error);
});

// Find out exactly when we made a connection.
ros.on('connection', function () {
    console.log('Connection made!');
});

// Find out exactly when a connection is closed.
ros.on('close', function () {
    console.log('Connection closed.');
});

// Create a connection to the rosbridge WebSocket server.
ros.connect('ws://192.168.1.235:9090')

/*
##############
### Engine ###
##############
*/

//Validation of BPMN files
function exec() {
    const extension = file.name.split('.').pop();
    let validExtensions = ["bpmn"]; //adding some valid extensions in array

    if (validExtensions.includes(extension)) { //if user selected file is an image file
        console.log("### [ " + JSON.stringify(file.name) + " ] ###");
        const filereader = new FileReader();
        filereader.onload = function (event) {
            executeXmlFile(event.target.result);
        };
        const t = filereader.readAsText(file, "UTF-8");
    } else {
        alert("This is not a BPMN File!");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    }
}

//Execution of BPMN files
function executeXmlFile(source) {
    'use strict';

    const { Engine } = require('bpmn-engine');
    const { EventEmitter } = require('events');
    const listener = new EventEmitter();

    var tstart = 0;
    var tfinish = 0;

    //Variables
    const engine = Engine({
        name: 'BPMN engine',
        //Insert external variables here
        variables: {
        },
        //Insert external functions here
        services: {
            addVariable,
            makeTopic,
            publish
        },
        source
    });

    //Freccie
    listener.on('flow.take', (flow) => {
        console.log(`flow.take <${flow.id}> was taken`);
    });

    //Inizio attivita'
    listener.on('activity.start', (activity) => {
        if (tstart == 0) tstart = activity.messageProperties.timestamp;
        console.log(`activity.start <${activity.id}> was taken`);
    });

    //Fine attivita'
    listener.on('activity.end', (activity) => {
        tfinish = activity.messageProperties.timestamp;
        console.log(`activity.end <${activity.id}> was released`);
    });

    //User task
    listener.on('activity.wait', (wait) => {
        console.log(`wait <${wait.id}> was taken`);
    });

    listener.on('activity.throw', (throwev) => {
        console.log(`throw <${throwev.id}> was taken`);
    });

    listener.on('activity.error', (errorev) => {
        console.log(`error <${errorev.id}> was taken`);
    });

    engine.on('end', (execution) => {
        console.log("### Execution completed in " + JSON.stringify(tfinish - tstart) + "ms ###");
    });

    engine.on('stop', (execution) => {
        console.log('stopped');
    });

    engine.on('error', (execution) => {
        console.log('error');
    });

    engine.execute({
        listener
    }, (err) => {
        if (err) throw err;
    });

    // Makes a new variable
    function addVariable(local, varName, varValue) {
        local.environment.output[varName] = varValue;
    }

    // Makes a new topic
    /*
    String   
        type: std_msgs/String
        format: { data: '<String>' }
    Movement 
        type: geometry_msgs/msg/Twist
        format: { linear: { x: 1.0, y: 0.0, z: 0.0 }, angular: { x: 0.0, y: 0.0, z: 1.0 } }
    */
    function makeTopic(local, topicName, topicType) {
        local.environment.output[topicName] = new ROSLIB.Topic({
            ros: ros,
            name: '/' + topicName,
            messageType: topicType
        });
    }

    // Publish data in a specific topic
    function publish(local, topicName, message) {
        local.environment.output[topicName].publish(message);
    }
}