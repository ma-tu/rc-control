# rc-control

「Raspberry Pi 3 で WiFiラジコン」の Raspberry Pi 上に起動するサーバー実装です。

## このレポジトリは以下を含みます。

* WiFiラジコン の Webページを Node.js の Express で実装しており、その実装プログラム
* Raspberry Pi の GPIO を制御するプログラム。
    * GPIO を通して モーターを制御しています。
* Webカメラを利用して、WiFiラジコンで撮影した映像をリアルタイム配信するためのページ
* 上記作成した Express の起動用スクリプト および 配信用プログラムの起動用スクリプト

## 関連ページ

本プログラムは はてなブログで書いていた「Raspberry Pi 3 で WiFiラジコン」の実装となります。  
「Raspberry Pi 3 で WiFiラジコン」の 関連URLは以下となります。

* [Raspberry Pi 3 で WiFiラジコン 〜 必要なもの - エンジニア『まつ』 の戦いの記録](http://matu-developer.hatenablog.com/entry/2016/10/15/160914)
* [Raspberry Pi 3 で WiFiラジコン(2) 〜 車体づくり - エンジニア『まつ』 の戦いの記録](http://matu-developer.hatenablog.com/entry/2016/09/16/122650)
* [Raspberry Pi 3 で WiFiラジコン(3) 〜 電子回路（基盤） - エンジニア『まつ』 の戦いの記録](http://matu-developer.hatenablog.com/entry/2016/10/15/214358)
* [Raspberry Pi 3 で WiFiラジコン(4) 〜 ラジコン操作用プログラム作成 (JavaScript) - エンジニア『まつ』 の戦いの記録](http://matu-developer.hatenablog.com/entry/2016/10/16/141622)
* [Raspberry Pi 3 で WiFiラジコン(5) 〜 Webカメラ + 完成 ＋ デモ - エンジニア『まつ』 の戦いの記録](http://matu-developer.hatenablog.com/entry/2016/10/17/211501)

特に (4)(5) の実装部分となりますが、利用している GPIO のポート番号などは (3) に依存します。

## セットアップ方法

### npm

Raspberry Pi に ssh で接続して、以下コマンドを実行する
```
sudo apt-get -y install npm
```

### pigpio

Raspberry Pi に ssh で接続して、以下コマンドを実行する
```
wget abyz.co.uk/rpi/pigpio/pigpio.zip
unzip pigpio.zip
cd PIGPIO
make
sudo make install
cd ..
```

### MJPG-streamer

Raspberry Pi に ssh で接続して、以下コマンドを実行する
```
sudo apt-get install subversion libjpeg-dev imagemagick
svn co https://svn.code.sf.net/p/mjpg-streamer/code/mjpg-streamer mjpg-streamer
cd mjpg-streamer
make
sudo make install
cd ..
```
### rc-control

Raspberry Pi に ssh で接続して、以下コマンドを実行する

```
wget https://github.com/ma-tu/rc-control/archive/master.zip
unzip master.zip
mv ./rc-control-master ./rc-control 
cd rc-control
npm install
npm install pigpio
chmod +x ./shell/stream.sh
cd ..
```

## 起動方法

上記の rc-control のフォルダ上で以下２つコマンドを別々の shell で起動します。

### MJPG-streamer の起動

```
cd rc-control
./shell/stream.sh
```

### rc-control の起動

```
cd rc-control
sudo node ./bin/www (Raspberry Pi のホスト名).local
```
## 終了方法

上記の shell で CTRL + C で終了します。

## 確認

ブラウザより以下実行します。
http://(Raspberry Pi のホスト名).local:3000/

## 設定

このプログラムは 以下の PIN 構成を前提としています。必要に応じて以下ソースファイルを編集します。
rc-control/src/server/controllers/rc-controller.js

```
var RIGHT_FW_PIN = 26;
var RIGHT_BK_PIN = 19;
var LEFT_FW_PIN = 13;
var LEFT_BK_PIN = 11;
```

## License

MIT License