var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

numero = parseInt(lines.shift());
horast = parseInt(lines.shift());
valor = parseFloat(lines.shift());
salario = horast * valor;
console.log("NUMBER = " + numero);
console.log("SALARY = U$ " + salario.toFixed(2));