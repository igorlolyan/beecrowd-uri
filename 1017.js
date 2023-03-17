var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines.shift());
var velocidade = parseInt(lines.shift());

var media = (tempo*velocidade)/12;

console.log(media.toFixed(3));