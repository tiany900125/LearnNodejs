// 2.js
exports.id = 'exports的id';  
exports.id2 = 'exports的id2';  
exports.func = function(){  
    console.log('exports的函数');
};
exports.func2 = function() {  
    console.log('exports的函数2');
};
module.exports = {  
    id: 'module.exports的id',
    func:function(){
        console.log('module.exports的函数');
    }

};