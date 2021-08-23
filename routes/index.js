var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Daraz Cares' });
});

router.get('/life', function(req, res, next) {
  res.render('life', { title: 'Life at Daraz' });
});

module.exports = router;
