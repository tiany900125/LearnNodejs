//app_createClient_3.js
var redis = require("redis"),
	RDS_PORT = 6379, //端口号
	RDS_HOST = '127.0.0.1', //服务器IP
	RDS_PWD = 'tiany',
	RDS_OPTS = {auth_pass:RDS_PWD},  //设置项 密码
	client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);

client.on("ready",function(err){
		if(err){
			console.log("err : "+err);
		}else{
			console.log("redis start 2");
		}
});	