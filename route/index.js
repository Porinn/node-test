var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    title: '타이틀',
    description: '설명'
  })
});

module.exports = router;
