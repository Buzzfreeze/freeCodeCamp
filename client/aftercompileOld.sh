DIR="/opt/freeCodeCamp/client/public"
if [ -d "$DIR" ]; then
  sudo rm -Rf /var/lib/docker/volumes/learncareerviocom_htdocs/_data/htdocs
  sudo cp -Rf /opt/freeCodeCamp/client/public /var/lib/docker/volumes/learncareerviocom_htdocs/_data/htdocs
  sudo ee site reload learn.careervio.com 
fi
