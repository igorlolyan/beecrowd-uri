var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//var segundos = parseInt(lines.shift());
//var arr = [3600, 60, 1];
//var resposta = [];
//
//for (let ar of arr){
//    resposta.push(parseInt(segundos/ar));
//    segundos = segundos % ar;
//}
//console.log(resposta.join(":"));

var segundos = parseInt(lines.shift());

horas = parseInt(segundos / 3600);
segundos = segundos % 3600;
minutos = parseInt(segundos / 60);
segundos = segundos % 60;
console.log(horas + ":" + minutos + ":" + segundos);