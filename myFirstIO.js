var fs = require('fs');

var buff = fs.readFileSync(process.argv[2], 'utf8');
// var str = buff.toString();
var lines = buff.split('\n');

console.log(lines.length - 1)
