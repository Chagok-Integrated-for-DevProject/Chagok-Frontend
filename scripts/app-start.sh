echo "app start ;)"

sudo pm2 kill;
sudo pm2 start "npm run start" --name chagok-fe