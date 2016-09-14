var Gpio = require('pigpio').Gpio;

function post(req, res){
  var testId = req.body.id;
  console.log('test:id = ' + testId);

  switch(testId) {
    case 'test1' :
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
    case 'test2' :
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
    case 'test3' :
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
    case 'test4' :
      break;
    case 'test5' :
      break;
  }
  res.send(req.body);
}

module.exports = {post};