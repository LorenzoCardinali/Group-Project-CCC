#!/bin/bash
  ###### ######## ####### #######  ###  #######
###           ##       ##      ## ###         
###      #######  ######  ###  ## ###  #######
###      ###  ##  ##  ##  ###  ## ###  ##     
 ######  ###  ##  ##   ## ######  ###  ##       

#source a ROS 2 installation
source /opt/ros/foxy/setup.sh

#checking for web bridge
if [ ! -d "ros2-web-bridge" ]
then
	echo "Installing web bridge..."
	git clone https://github.com/RobotWebTools/ros2-web-bridge.git
	cd ros2-web-bridge || exit
	npm install
	cd ..
fi

#checking for modules
if [ ! -d "node_modules" ]; then echo "Installing modules..." && npm install; fi