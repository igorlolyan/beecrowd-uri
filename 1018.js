var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//var valor = parseInt(lines.shift());
//var notas = [100, 50, 20, 10, 5, 2, 1];
//console.log(valor);
//
//for(let manjuba of notas){
//    var qntdnotas = parseInt(valor/manjuba);
//    console.log(qntdnotas +' nota(s) de R$ ' + manjuba + ',00');
//    valor = valor % manjuba;
//}

var valor = parseInt(lines.shift());

console.log(valor);
notas = parseInt(valor/100);
valor = valor % 100;
console.log(notas + " nota(s) de R$ 100,00");
valor = valor % 100;

notas = parseInt(valor/50);
valor = valor % 50;
console.log(notas + " nota(s) de R$ 50,00");
valor = valor % 50;

notas = parseInt(valor/20);
valor = valor % 20;
console.log(notas + " nota(s) de R$ 20,00");
valor = valor % 20;

notas = parseInt(valor/10);
valor = valor % 10;
console.log(notas + " nota(s) de R$ 10,00");
valor = valor % 10;

notas = parseInt(valor/5);
valor = valor % 5;
console.log(notas + " nota(s) de R$ 5,00");
valor = valor % 5;

notas = parseInt(valor/2);
valor = valor % 2;
console.log(notas + " nota(s) de R$ 2,00");
valor = valor % 2;

notas = parseInt(valor/1);
valor = valor % 1;
console.log(notas + " nota(s) de R$ 1,00");
valor = valor % 1;