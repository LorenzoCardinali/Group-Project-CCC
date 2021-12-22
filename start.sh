#!/bin/bash
  ###### ######## ####### #######  ###  #######
###           ##       ##      ## ###         
###      #######  ######  ###  ## ###  #######
###      ###  ##  ##  ##  ###  ## ###  ##     
 ######  ###  ##  ##   ## ######  ###  ##       

#checking for files
./install.sh

#building script.js
npm start

#closing possible open screens
./stop.sh

#starting screens
echo "Starting bridge..." && screen -S rosbridge -dm node "ros2-web-bridge/bin/rosbridge.js"
echo "Starting webpage..." && screen -S webpage -dm node web-service.js
