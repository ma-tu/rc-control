#!/bin/bash

PI_RC_CONTROL_PATH="rc-control/rc-control"

# server.js
scp ./server.js pi@pi.local:~/${PI_RC_CONTROL_PATH}/

# クライアントのソースを public以下にコピーする
scp ./src/client/css/rc.css pi@pi.local:~/${PI_RC_CONTROL_PATH}/public/app/css/
scp ./src/client/js/api.js pi@pi.local:~/${PI_RC_CONTROL_PATH}/public/app/js/

# サーバーのソースを public以下にコピーする
scp ./src/server/controllers/rc-controller.js pi@pi.local:~/${PI_RC_CONTROL_PATH}/src/server/controllers/
scp ./src/server/controllers/test-controller.js pi@pi.local:~/${PI_RC_CONTROL_PATH}/src/server/controllers/
scp ./src/server/routes/index.js pi@pi.local:~/${PI_RC_CONTROL_PATH}/src/server/routes/
scp ./src/server/views/partial/partial-rc.ejs pi@pi.local:~/${PI_RC_CONTROL_PATH}/src/server/views/partial/
scp ./src/server/views/partial/partial-test.ejs pi@pi.local:~/${PI_RC_CONTROL_PATH}/src/server/views/partial/
scp ./src/server/views/error.ejs pi@pi.local:~/${PI_RC_CONTROL_PATH}/src/server/views/
scp ./src/server/views/index.ejs pi@pi.local:~/${PI_RC_CONTROL_PATH}/src/server/views/

