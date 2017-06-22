// 4.js
var a = require('./5.js');  
// 若传的是类，new一个对象
var person = new a('Kylin',20);  
console.log(person.speak()); // my name is Kylin ,my age is 20

// 若不需要在构造函数时初始化参数，直接调用方法/属性
// a.speak();  // my name is kylin ,my age is 20