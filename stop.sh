#!/bin/bash
  ###### ######## ####### #######  ###  #######
###           ##       ##      ## ###         
###      #######  ######  ###  ## ###  #######
###      ###  ##  ##  ##  ###  ## ###  ##     
 ######  ###  ##  ##   ## ######  ###  ##       

if ! screen -list | grep -q "webpage\|rosbridge"; then echo "Nothing to stop." && exit; fi

if screen -list | grep -q "rosbridge"; then echo "Stopping bridge..." && screen -r rosbridge -X quit; fi

if screen -list | grep -q "webpage"; then echo "Stopping webpage..." && screen -r webpage -X quit ; fi