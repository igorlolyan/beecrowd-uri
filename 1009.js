var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

nome = lines.shift();
salario = parseFloat(lines.shift());
tvendas = parseFloat(lines.shift());
bonus = (tvendas * 15) / 100;
salariocombonus = bonus + salario;
console.log("TOTAL = R$ " + salariocombonus.toFixed(2));