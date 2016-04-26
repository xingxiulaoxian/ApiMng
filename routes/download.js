var express = require('express');
var router = express.Router();

/* GET download page. */
router.get('/', function(req, res, next) {
  res.download( './upload/txt.txt' );
});

module.exports = router;