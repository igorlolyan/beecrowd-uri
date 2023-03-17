var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dias = parseInt(lines.shift());

var ano = 365;
var mes = 30;
var dia = 1;

var a = parseInt(dias/ano);
console.log(a + " ano(s)");
dias = dias % ano;

var b = parseInt(dias/mes);
console.log(b + " mes(es)");
dias = dias % mes;

var c = parseInt(dias/dia);
console.log(c + " dia(s)");
