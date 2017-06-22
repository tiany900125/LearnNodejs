// 3.js
var a = require('./2.js');  
// 当属性和函数在module.exports都有定义时：
console.log(a.id);  // module.exports的id  
console.log("~~~~~~~~~~~~~~~~~~"); 
console.log(a.func()); // module.exports的函数
console.log("~~~~~~~~~~~~~~~~~~"); 
// 当属性在module.exports没有定义，函数在module.exports有定义
console.log(a.id2);  // undefined  
console.log("~~~~~~~~~~~~~~~~~~"); 
console.log(a.func());  // module.exports的函数
console.log("~~~~~~~~~~~~~~~~~~"); 

// 当函数在module.exports没有定义，属性在module.exports有定义
console.log(a.id);        // module.exports的id  
console.log("~~~~~~~~~~~~~~~~~~"); 
console.log(a.func2());    // 报错了 TypeError: a.func2 is not a function 
console.log("~~~~~~~~~~~~~~~~~~");  