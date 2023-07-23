#!/bin/bash
 echo "> FE Deploy"

cd /home/ubuntu/chagok
npm install
npm run build
npm run start > /dev/null 2> /dev/null < /dev/null &