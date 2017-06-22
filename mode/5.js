// 5.js
// Person类
function Person(name,age){  
    this.name = name;
    this.age = age;
}
// 为类添加方法
Person.prototype.speak = function(){  
    console.log('my name is '+this.name+' ,my age is '+this.age);
};

// 返回类
module.exports = Person;

// 若构造函数没有传入参数(name,age)，直接传入对象
// module.exports = new Person('kylin',20);