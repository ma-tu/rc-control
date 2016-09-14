#!/bin/sh
PORT=8080     #ポート番号
SIZE=320x240  #動画のサイズ（横x縦）
FPS=10        #フレームレート

export LD_LIBRARY_PATH=/usr/local/lib
mjpg_streamer \
  -i "input_uvc.so -f $FPS -r $SIZE -d /dev/video0 -y" \
  -o "output_http.so -w /usr/local/www -p $PORT"
