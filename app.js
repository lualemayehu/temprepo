//npm - global command, comes with node
// nmp --version

//local dependency - use it only in this particular project
// npm install <packegeName>

//gloabal dependency - use it in any project 
//npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.jason - manfest file (stores important project/package)
//manual approach (creat Packege.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)
const _ = require('lodash');

const item =[1, [2,[3,[4]]]];
const newItem = _.flattenDeep(item);
console.log(newItem);