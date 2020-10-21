var express = require('express');
var router = express.Router();
var baseVarible = require('../lib/util')

router.get('/', function(req, res, next) {
    // console.log(baseVarible);
    res.render('index', baseVarible);
});

router.get('/userList', function(req, res, next) {
    // console.log(baseVarible);
    res.render('p1', baseVarible);
});

module.exports = router;
