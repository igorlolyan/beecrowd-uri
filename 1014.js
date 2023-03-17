var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distancia = parseInt(lines.shift());
var combustivel = parseFloat(lines.shift());

var media = distancia/combustivel;

console.log(media.toFixed(3) + " km/l");