var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = 3.14159;
raio = parseFloat(lines.shift());
area = n * (raio * raio);
console.log("A=" + area.toFixed(4));