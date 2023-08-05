 echo "> after install"

 cd /home/ubuntu/chagok
 sudo npm run build
 sudo pm2 restart chagok-fe