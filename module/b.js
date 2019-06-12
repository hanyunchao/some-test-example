let a = require('./a.js');
console.log(a);
a.a1 = 'newa1';
console.log(a);
let b = require('./a.js');
console.log(b);