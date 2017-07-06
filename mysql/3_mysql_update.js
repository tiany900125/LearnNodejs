//3_mysql_update.js
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



var userModSql = 'UPDATE userinfo SET UserName = ?,UserPass = ? WHERE Id = ?';
var userModSql_Params = ['liuzy', 'liuzy',1];
//改
connection.query(userModSql,userModSql_Params,function (err, result) {
   if(err){
         console.log('UPDATE ERROR - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------');
});



//关闭 connection
connection.end(function(err){
  if(err){
    console.log('connection end err - :'+err);
    return;
  }

    console.log('connection end success!');
});



