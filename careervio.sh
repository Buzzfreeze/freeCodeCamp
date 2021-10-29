sudo ls
npm run ensure-env && npm run build:curriculum && npm run build:server
pm2 reload org
cd client
npm run build 
./aftercompile.sh