#!/bin/bash
permitted by applicable law.
unzip -q rc-control.zip
rm rc-control.zip

rm -rf /opt/local/rc-control
mv rc-control /opt/local/

node /opt/local/rc-control/bin/www