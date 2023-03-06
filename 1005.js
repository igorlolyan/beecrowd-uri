var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

A = parseFloat(lines.shift());
B = parseFloat(lines.shift());
media = ((A * 3.5) + (B * 7.5))/ 11;
console.log("MEDIA = " + media.toFixed(5));