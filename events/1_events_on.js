/*
    调用events模块，获取events.EventEmitter对象
*/
var EventEmitter = require('events').EventEmitter;   
var ee = new EventEmitter();

/*
    EventEmitter.on(event, listener) 为事件注册一个监听
    参数1：event  字符串，事件名
    参数2：回调函数
*/
ee.on('some_events', function(cat, dog) {
    console.log("第1个监听事件,参数cat=" + cat + ",dog="+dog );
});

console.log('第一轮');
ee.emit('some_events', 'Tom', 'Tian');

console.log('第二轮');
ee.emit('some_events', 'Tom', 'T');

//EventEmitter.on(event, listener) 示例源码