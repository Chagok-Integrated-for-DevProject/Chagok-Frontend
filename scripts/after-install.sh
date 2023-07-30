 echo "> after install"

 cd /home/ubuntu/chagok
 sudo rm -r node_modules
 sudo npm install
 sudo npx pm2 reload all