window.console = {
    log: function (str) {
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("myLog").appendChild(node);
    }
}

var stop = 0;

//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

const buttonsArea = document.querySelector(".bottons-area"),
    startbutton = buttonsArea.querySelector(".start"),
    stopbutton = buttonsArea.querySelector(".stop");

stopbutton.onclick = () => {
    stop = 1;
}

startbutton.onclick = () => {
    if (document.getElementById("myFile").textContent != "No file") {
        stop = 0;
        exec();
    } else {
        alert("No BPMN file loaded!");
    }
}

button.onclick = () => {
    input.click(); //if user click on the button then the input also clicked
}

input.addEventListener("change", function () {
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
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
    dragText.textContent = "Drag & Drop to Upload File";
});

function exec() {
    const extension = file.name.split('.').pop();
    let validExtensions = ["bpmn"]; //adding some valid extensions in array

    if (validExtensions.includes(extension)) {
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

function executeXmlFile(source) {
    'use strict';

    const { Engine } = require('bpmn-engine');
    const { EventEmitter } = require('events');
    const listener = new EventEmitter();

    var tstart = 0;
    var tfinish = 0;

    const engine = Engine({
        name: 'BPMN engine',
        variables: {
            input: 51,
        },
        source
    });

    //Freccie
    listener.on('flow.take', (flow) => {
        console.log(`flow.take <${flow.id}> was taken`);
        if (stop == 1) engine.stop();
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
        console.log("### Execution stopped in " + JSON.stringify(tfinish - tstart) + "ms ###");
    });

    engine.on('error', (execution) => {
        console.log("### Execution stopped for an error, " + JSON.stringify(tfinish - tstart) + "ms ###");
    });

    engine.execute({
        listener
    }, (err) => {
        if (err) throw err;
    });
}