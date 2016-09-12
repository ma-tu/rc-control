#!/bin/bash
rm -rf ./rc-control
unzip -q rc-control.zip

rm -rf /opt/local/rc-control/public
rm -rf /opt/local/rc-control/src
mv rc-control/public /opt/local/rc-control
mv rc-control/src /opt/local/rc-control
mv rc-control/server.js /opt/local/rc-control

sudo node /opt/local/rc-control/bin/www