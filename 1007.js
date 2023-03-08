var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

A = parseInt(lines.shift());
B = parseInt(lines.shift());
C = parseInt(lines.shift());
D = parseInt(lines.shift());

console.log("DIFERENCA = " + (A*B - C*D));