var express = require('express');
var router = express.Router();

var rc = require('../controllers/rc-controller');
var test = require('../controllers/test-controller');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/rc', function(req, res) {
  rc.post(req, res);
});

router.post('/test', function(req, res) {
  test.post(req, res);
});

module.exports = router;
