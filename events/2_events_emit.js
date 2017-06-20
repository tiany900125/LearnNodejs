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


/*
    EventEmitter.emit(event, [arg1], [arg2], [...])   触发指定事件
    参数1：event  字符串，事件名
    参数2：可选参数，按顺序传入回调函数的参数
    返回值：该事件是否有监听
*/
var isSuccess = ee.emit('some_events', 'Tom', 'Tian');

ee.on('some_events', function(cat, dog) {
    console.log("第2个监听事件,参数cat=" + cat + ",dog="+dog );
});


ee.emit('some_events', 'zhong', 'wei');

var isSuccess2 = ee.emit('other_events', 'Tom', 'Tian');

console.log(isSuccess);
console.log(isSuccess2);