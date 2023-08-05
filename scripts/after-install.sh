 echo "> after install"

 cd /home/ubuntu/chagok
 sudo rm -r node_modules
 sudo npm install
 sudo npm run build
 sudo pm2 kill;
 sudo pm2 start "npm run start" --name chagok-fe