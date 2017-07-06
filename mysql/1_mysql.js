//1_mysql.js
var mysql = require('mysql');  //调用mysql模块

//创建一个connection

var connection = mysql.createConnection({
  host     : '192.168.41.36',
  user     : 'root',
  password : 'admin',
  port: '3306',
  database: 'learn_nodejs',
});

//建立连接
connection.connect(function(err){
	if(err){
		console.log('connection connect err - :'+err);
		return;
	}

		console.log('connection connect success!');
});


//执行sql
connection.query('select 1 AS solution', function(err,rows,fields){
	if(err){
		console.log('connection query err - :'+err);
		return;
	}

		console.log('solution :'+rows[0].solution);
});


//关闭 connection
connection.end(function(err){
	if(err){
		console.log('connection end err - :'+err);
		return;
	}

		console.log('connection end success!');
});



