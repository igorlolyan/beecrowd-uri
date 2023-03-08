var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

itensA = lines.shift().split(" ");
itensB = lines.shift().split(" ");

pecaA = itensA[0];
npecaA = itensA[1];
valorA = itensA[2];
pecaB = itensB[0];
npecaB = itensB[1];
valorB = itensB[2];

total = (npecaA * valorA) + (npecaB * valorB);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));