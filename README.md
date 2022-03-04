# Group-Project-CCC

## **System requirements**
Ubuntu Linux - Focal Fossa (20.04) 64-bit with ROS2 foxy installed.
## **Installation**
1. Update your apt repository and install the needed packages:
    ```
    sudo apt update && sudo apt install git screen npm nodejs
    ```
2. Fix the nodejs version installed:
    ```
    curl -fsSL https://deb.nodesource.com/setup_12.x | sudo -E bash - && sudo apt-get install -y nodejs
    ```
3. Clone the dependencies:
    ```
    git clone https://github.com/LorenzoCardinali/Group-Project-CCC
    cd Group-Project-CCC && chmod +x *.sh
    ```
4. Install the dependencies:
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

## **Run BPMN files**
1. Upload the chosen BPMN file in the web page.

2. Now press __start__ to execute it and you should be able to see the execution log inside the console.

## **Ros topics**
Here is a useful list of commands about __Ros Topics__.
- Display topics list:
    ```
    ros2 topic list
    ```
- Start listening to a specific topic:
    ```
    ros2 topic echo /<topic_name>
    ```

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
