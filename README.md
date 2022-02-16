# Group-Project-CCC
## **Description**:
todo...

## **System requirements**
Ubuntu Linux - Focal Fossa (20.04) 64-bit with ROS2 foxy installed.
## **Installation**
1. Update your apt repository and install the needed packages:
    ```
    sudo apt update && sudo apt install git screen npm nodejs
    ```
2. Clone the dependencies:
    ```
    git clone https://github.com/LorenzoCardinali/Group-Project-CCC
    cd Group-Project-CCC && chmod +x *.sh
    ```
3. Install the dependencies:
    ```
    ./install.sh
    ```

## **Start services and use web page**
1. Make sure to source a ROS 2 installation:
    ```
    source /opt/ros/foxy/setup.sh
    ```
2. Execute the __start.sh__ script to start 2 new screens containing the services for the web page and the web bridge.
    ```
    ./start.sh
    ```
    _Note: both services have their own port (web bridge -> 9090, web page -> 3000)_

3. Open your browser, and navigate to URL: http://localhost:3000/uploader.html

## **Stop services**
1. Execute the __stop.sh__ script to close the 2 services screens.
    ```
    ./stop.sh
    ```

## **Run example**
1. After starting the web page check for 2 new topics __/project_topic_1__ and __/project_topic_2__ by executing the command:
    ```
    ros2 topic list
    ```
2. Start listening to one of those topics using:
    ```
    ros2 topic echo /project_topic_1
    ```
    or:
    ```
    ros2 topic echo /project_topic_2
    ```
3. Upload the BPMN file __topic_test.bpmn__ in the web page.

4. Now press __start__ to execute it and you should be able to see the new data being sent.

## **Credits**
Students
- Lorenzo Cardinali
- Benedetta Camarri
- Leonardo Curzi

Tutors
- Lorenzo Rossi
- Sara Pettinari

Relatore
- Prof. Barbara Re