var EventEmitter = require('events').EventEmitter;   
var ee = new EventEmitter();

/*
    EventEmitter.setMaxListeners (n)   给EventEmitter设置最大监听
    参数1： n 数字类型，最大监听数
    
    超过10个监听时，不设置EventEmitter的最大监听数会提示：
    (node) warning: possible EventEmitter memory leak detected. 11 listeners added.
     Use emitter.setMaxListeners() to increase limit.
    设计者认为侦听器太多，可能导致内存泄漏，所以存在这样一个警告
*/
ee.setMaxListeners(15);

/*
     给EventEmitter 添加11个监听
*/
for (var i = 10; i >= 0; i--) {
    ee.on('some_events',function()
    {
        console.log('第'+ (i +1) +'个监听');
    });

};


