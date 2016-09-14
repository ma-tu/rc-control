#!/bin/bash
rm -rf ./rc-control
unzip -q rc-control.zip
rm rc-control.zip

rm -rf /opt/local/rc-control
mv rc-control /opt/local/

cd /opt/local/rc-control
npm install pigpio
cd ~/

sudo node /opt/local/rc-control/bin/www