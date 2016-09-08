var express = require('express');
var router = express.Router();
var gpio = require('../rc/gpio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/led', function(req, res) {
  console.log(req.query.action);
  if (req.query.action == 'on') {
    gpio.setValue(24, 1);
  } else if (req.query.action == 'off') {
    gpio.setValue(24, 0);
  } else if (req.query.action == 'get') {
    console.log(gpio.getValue(24));
  }
});

module.exports = router;
