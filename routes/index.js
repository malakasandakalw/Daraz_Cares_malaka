var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Daraz Cares' });
});

router.get('/life', function(req, res, next) {
  res.render('life', { title: 'Life at Daraz' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/careers', function(req, res, next) {
  res.render('careers', { title: 'Careers' });
});

router.get('/stories', function(req, res, next) {
  res.render('stories', { title: 'Stories and News' });
});

module.exports = router;
