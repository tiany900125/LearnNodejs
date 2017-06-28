//subform.js 代码
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	 console.log('get=====');
var userName = req.query.txtUserName;
var userPwd = req.query.txtUserPwd;
var userName2 = req.param('txtUserName');
var userPwd2 = req.param('txtUserPwd');

  console.log('req.query用户名:'+userName);
  console.log('req.query密码:'+userPwd);
  console.log('req.param用户名:'+userName2);
  console.log('req.param密码:'+userPwd2);
  res.render('subform', { title: '提交表单及接收参数GET' });
});

router.post('/', function(req, res) {
	 console.log('post=====');
var userName = req.query.txtUserName;
var userPwd = req.query.txtUserPwd;
var userName3 = req.body.txtUserName;
var userPwd3 = req.body.txtUserPwd;
var userName2 = req.param('txtUserName');
var userPwd2 = req.param('txtUserPwd');

  console.log('req.query用户名:'+userName);
  console.log('req.query密码:'+userPwd);
  console.log('req.body:'+userName3);
  console.log('req.body:'+userPwd3);
  console.log('req.param用户名:'+userName2);
  console.log('req.param密码:'+userPwd2);
  res.render('subform', { title: '提交表单及接收参数POST' });
});

module.exports = router;
