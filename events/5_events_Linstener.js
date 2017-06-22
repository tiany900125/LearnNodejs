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

ee.on('some_events', listener);

ee.on('some_events', listener2);

ee.on('other_events',function(dog,cat)
{
    console.log("其它监听事件,参数dog=" + dog + ",cat="+cat );
});

/*
    EventEmitter.listeners(event)   //返回指定事件的监听数组
    参数1：event  字符串，事件名    
*/
var listenerEventsArr = ee.listeners("some_events");
console.log("listenersAttr.length==" + listenerEventsArr.length );


for (var i = listenerEventsArr.length - 1; i >= 0; i--) {
	console.log("监听===="+listenerEventsArr[i]);
};



var listenerEventsArr = ee.listeners('some_events');

console.log(listenerEventsArr.length)

for (var i = listenerEventsArr.length - 1; i >= 0; i--) {
    console.log(listenerEventsArr[i]); 
};
