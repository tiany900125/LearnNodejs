//app_createClient_2.js
var redis = require("redis"),
	RDS_PORT = 6379, //端口号
	RDS_HOST = '127.0.0.1', //服务器IP
	RDS_OPTS = {},  //设置项
	client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);

client.on("ready",function(err){
		if(err){
			console.log("err : "+err);
		}else{
			console.log("redis start 2");
		}
});	