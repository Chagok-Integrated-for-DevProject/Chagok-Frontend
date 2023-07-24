echo "app start ;)"

cd /home/ubuntu/chagok
pm2 start npm --name "chagok-fe" -- start