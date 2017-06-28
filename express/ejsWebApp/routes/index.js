var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '<h1>Express</h1>'
                          ,users:[{username: 'Tiany'},
                                {username: 'Tiany Zhong'},
                                {username: 'Zhong Dian'}] 
            });
});

module.exports = router;
