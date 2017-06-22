console.log(exports); // {}  
console.log(module.exports);  // {}  
console.log(exports === module.exports);    // true  
console.log(exports == module.exports);        // true  
/**
 Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/1.js',
  loaded: false,
  children: [],
  paths:
   [ 
     '/node_modules' ] 
 }
 */
console.log(module);