//app_client_multi
var redis = require("redis"),
	RDS_PORT = 6379, //端口号
	RDS_HOST = '127.0.0.1', //服务器IP
	RDS_PWD = 'tiany',
	RDS_OPTS = {},  //设置项 密码
	client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);

client.auth(RDS_PWD,function function_name () {
	// body...
	console.log("auth 通过 ");
});


client.on("connect",function(){
	var key = "lessions";
	client.sadd(key,"java");
	client.sadd(key,"ndoejs");
	client.sadd(key,"js");
	client.sadd(key,"oracle");

	client.multi()
	.sismember(key,"java")
	.smembers(key)
	.exec(function (err,replies){
		console.log("Multi length :"+ replies.length);
		replies.forEach(function  (reply,index) {
			 console.log("Reply " + index + ": " + reply.toString());
			 // body...
		});
		client.quit();
	});
});	

client.on("ready",function(err){
		if(err){
			console.log("err : "+err);
		}else{
			console.log("redis start 4");
		}
});	

