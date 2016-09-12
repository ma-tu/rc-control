var express = require('express');
var router = express.Router();
var Gpio = require('pigpio').Gpio;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/led', function(req, res) {
  console.log(req.body.action);

  try{
    var led = new Gpio(24, {mode: Gpio.OUTPUT});
    if (req.body.action == 'on') {
      led.digitalWrite(1);
    } else if (req.body.action == 'off') {
      led.digitalWrite(0);
    }
  }catch (e) {
    console.log(e);
  }

  res.send(req.body);
});

module.exports = router;
