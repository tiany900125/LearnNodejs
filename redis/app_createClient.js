//app_createClient.js
var redis = require("redis"),
	client = redis.createClient();

client.on("ready",function(err){
		if(err){
			console.log("err : "+err);
		}else{
			console.log("redis start ");
		}
});	