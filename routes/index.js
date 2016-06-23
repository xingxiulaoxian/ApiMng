var express = require('express');
var dataCount = require('../data/dataCount');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Express', 
  	siteName : 'api管理系统',
  	list : dataCount.getDataCount()
  });
});

module.exports = router;
