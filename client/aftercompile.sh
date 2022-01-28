DIR="/opt/freeCodeCamp/client/public"
if [ -d "$DIR" ]; then
  sudo rm -Rf /var/lib/docker/volumes/learncareerviocom_htdocs/_data/htdocs2
  sudo cp -Rf /opt/freeCodeCamp/client/public /var/lib/docker/volumes/learncareerviocom_htdocs/_data/htdocs2
  sudo rm -Rf /var/lib/docker/volumes/learncareerviocom_htdocs/_data/htdocs
  sudo mv /var/lib/docker/volumes/learncareerviocom_htdocs/_data/htdocs2 /var/lib/docker/volumes/learncareerviocom_htdocs/_data/htdocs
  sudo ee site reload learn.careervio.com 
fi
