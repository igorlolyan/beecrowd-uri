var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines[0].split(' ');
var line2 = lines[1].split(' ');

var x1 = parseFloat(line1.shift());
var y1 = parseFloat(line1.shift());
var x2 = parseFloat(line2.shift());
var y2 = parseFloat(line2.shift());

distancia = Math.sqrt(((x2 - x1)*(x2 - x1)) + ((y2 - y1)* (y2 - y1)));

console.log(distancia.toFixed(4));