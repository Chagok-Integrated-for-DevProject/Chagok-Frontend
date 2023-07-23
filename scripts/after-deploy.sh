#!/bin/bash
REPOSITORY=/home/ubuntu/chagok
 echo "> FE Deploy"

 cd $REPOSITORY
 sudo cp -r dist/* /var/www/html