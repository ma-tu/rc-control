var Gpio = require('pigpio').Gpio;

var RIGHT_FW_PIN = 26;
var RIGHT_BK_PIN = 19;
var LEFT_FW_PIN = 13;
var LEFT_BK_PIN = 11;
var ALL_PINS = [RIGHT_FW_PIN, RIGHT_BK_PIN, LEFT_FW_PIN, LEFT_BK_PIN];

function post(req, res){
  var action = req.body.action;
  console.log('rc:action = ' + action);

  if (action == 'stop') {
    try {
      ALL_PINS.forEach((pin) => {
        (new Gpio(pin, {mode: Gpio.OUTPUT})).digitalWrite(0);
      });
    }catch(e) {
      console.log(e);
    }
  } else {
    var pins = getActionPin(action);
    try{
      (new Gpio(pins.right, {mode: Gpio.OUTPUT})).digitalWrite(1);
      (new Gpio(pins.left, {mode: Gpio.OUTPUT})).digitalWrite(1);
    }catch (e) {
      console.log(e);
    }
  }

  res.send(req.body);
}

function getActionPin(action) {
  switch(action) {
    case "forward":
      return {right: RIGHT_FW_PIN, left: LEFT_FW_PIN};
    case "back":
      return {right: RIGHT_BK_PIN, left: LEFT_BK_PIN};
    case "right":
      return {right: RIGHT_BK_PIN, left: LEFT_FW_PIN};
    case "left":
      return {right: RIGHT_FW_PIN, left: LEFT_BK_PIN};
  }
}

module.exports = {post};