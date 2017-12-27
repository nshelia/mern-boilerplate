var express = require('express');
var router = express.Router();

router.get('/favicon.ico',function(req,res,next) {
	res.status(404);
})

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
