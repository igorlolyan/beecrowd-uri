var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
const pi = 3.14159;
var formula = (4.0/3.0) * pi * (A*A*A);
console.log("VOLUME = " + formula.toFixed(3));