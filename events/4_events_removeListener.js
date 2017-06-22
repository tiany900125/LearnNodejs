var EventEmitter = require('events').EventEmitter;   
var ee = new EventEmitter();

var listener = function(dog,cat)
{
    console.log("第1个监听事件,参数dog=" + dog + ",cat="+cat );
}

var listener2= function(dog,cat)
{
    console.log("第2个监听事件,参数dog=" + dog + ",cat="+cat );
}

var listener3= function(dog,cat)
{
    console.log("第3个监听事件,参数dog=" + dog + ",cat="+cat );
}

ee.on('some_events', listener);

ee.on('some_events', listener2);

ee.on('some_events', listener3);
/*
    EventEmitter.removeListener(event, listener)  移除指定事件的监听器
    注意：该监听器必须是注册过的
   
*/
ee.removeListener('some_events', listener);

ee.removeListener('some_events', listener3);

ee.emit('some_events', 'Wilson', 'Zhong');

