var express = require('express');
var router = express.Router();

var rc = require('../controllers/rc-controller');
var test = require('../controllers/test-controller');

router.get('/', function(req, res, next) {
  var raspberryHost = module.parent.exports.set('raspberryHost');
  var streamUrl= "http://" + raspberryHost + ":8080/stream_simple.html";

  res.render('index', { streamUrl: streamUrl});
});

router.post('/rc', function(req, res) {
  rc.post(req, res);
});

router.post('/test', function(req, res) {
  test.post(req, res);
});

module.exports = router;
