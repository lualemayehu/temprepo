//Modules - Encapsulate code (only share minumum information)
//commonJs, every file in Node is a module

const name = require('./ex4_name');
const sayHi= require('./module_util');
const data=require('./ex5_alt_module');
require('./ex3_modules');

sayHi('Kebede');
sayHi(name.b);
console.log(data);

