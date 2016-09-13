var express = require('express');
var router = express.Router();
var Gpio = require('pigpio').Gpio;

router.post('/', function(req, res) {
  var action = req.body.action;
  console.log('rc:action = ' + action);

  var rightPin = 0;
  var leftPin = 0;
  var rightSpeed = 0;
  var leftSpeed = 0;

  switch(action) {
    case "stop":
      try {
        [26, 19, 13, 11].forEach((pin) => {
          var motor = new Gpio(pin, {mode: Gpio.OUTPUT});
          motor.digitalWrite(0);
        });
      }catch(e) {
        console.log(e);
      }
      console.log("motor:stop.pwmWrite(" + rightSpeed + ")");
      res.send(req.body);
      return;
    case "forward":
      rightPin = 26;
      rightSpeed = 255;
      leftPin = 13;
      leftSpeed = 255;
      break;
    case "back":
      rightPin = 19;
      rightSpeed = 255;
      leftPin = 11;
      leftSpeed = 255;
      break;
    case "right":
      rightPin = 19;
      rightSpeed = 255;
      leftPin = 13;
      leftSpeed = 255;
      break;
    case "left":
      rightPin = 26;
      rightSpeed = 255;
      leftPin = 11;
      leftSpeed = 255;
      break;
  }

  try{
    var motorRight = new Gpio(rightPin, {mode: Gpio.OUTPUT});
    var motorLeft = new Gpio(leftPin, {mode: Gpio.OUTPUT});

    console.log("motorRight.pwmWrite(" + rightSpeed + ")");
    console.log("motorLeft.pwmWrite(" + leftSpeed + ")");
    motorRight.digitalWrite(1);
    motorLeft.digitalWrite(1);

    //setTimeout(() => {
    //  console.log("motor.pwmWrite(0)");
    //  motorRight.pwmWrite(0);
    //  motorLeft.pwmWrite(0);
    //}, 1000);
  }catch (e) {
    console.log(e);
  }
  res.send(req.body);
});

module.exports = router;
