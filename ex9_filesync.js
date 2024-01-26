const{readFileSync, writeFileSync }= require('fs');
//the above is the same as
//const fs =require('fs');
//fs.readFile
// it is called destructuring 

const first= readFileSync('./content/first.txt','utf8');
const second= readFileSync('./content/second.txt','utf8');

console.log(first,second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first},${second} `, {flag:'a'});