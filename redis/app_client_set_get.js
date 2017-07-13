//app_client_set_get
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
	client.set("author","Tiany",redis.print);
	client.get("author",redis.print);
	console.log("connect");
});	

client.on("ready",function(err){
		if(err){
			console.log("err : "+err);
		}else{
			console.log("redis start 4");
		}
});	