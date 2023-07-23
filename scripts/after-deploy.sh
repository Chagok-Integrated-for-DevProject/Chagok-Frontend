#!/usr/bin/env bash
 echo "> FE 배포"

 cd $REPOSITORY
 sudo cp -rf /home/ubuntu/deploy-fe/dist/* /var/www/html