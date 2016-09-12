var express = require('express');
var router = express.Router();
var Gpio = require('pigpio').Gpio;

router.post('/', function(req, res) {
  console.log('test:no = ' + req.body.no);

  switch(req.body.no) {
    case 1:
      try{
        var motorRight = new Gpio(19, {mode: Gpio.OUTPUT});
        console.log("motor.pwmWrite(128)");
        motorRight.pwmWrite(128);
        setTimeout(() => {
          console.log("motor.pwmWrite(0)");
          motorRight.pwmWrite(0);
        }, 3000);
      }catch (e) {
        console.log(e);
      }
      break;
    case 2:
      try{
        var motorLeft = new Gpio(11, {mode: Gpio.OUTPUT});
        console.log("motorLeft.digitalWrite(1)");
        motorLeft.digitalWrite(1);
        setTimeout(() => {
          console.log("motorLeft.digitalWrite(0)");
          motorLeft.digitalWrite(0);
        }, 3000);
      }catch (e) {
        console.log(e);
      }
      break;
    case 3:
      var servo = new Gpio(10, {mode: Gpio.OUTPUT});
      var counter = 0;
      var timer = setInterval(() => {
        counter = counter + 1;

        if (counter >= 10) {
          clearInterval(timer);
        } else {
          switch(counter % 3) {
            case 0:
              console.log("servo.servoWrite(500)");
              servo.servoWrite(500);
              break;
            case 1:
              console.log("servo.servoWrite(1450)");
              servo.servoWrite(1450);
              break;
            case 2:
              console.log("servo.servoWrite(2400)");
              servo.servoWrite(2400);
              break;
          }
        }
      }, 1000);
      break;
    case 4:
      break;
    case 5:
      break;
  }
  res.send(req.body);
});

module.exports = router;
