var express = require('express');
var router = express.Router();
var gpio = require('../rc/gpio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/led', function(req, res) {
  console.log(req.body.action);
  if (req.body.action == 'on') {
    gpio.setValue(24, 1);
  } else if (req.body.action == 'off') {
    gpio.setValue(24, 0);
  } else if (req.body.action == 'get') {
    console.log(gpio.getValue(24));
  }
  res.send(req.body);
});

module.exports = router;
