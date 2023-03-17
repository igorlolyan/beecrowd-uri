var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());

MaiorAB = ((A+B+Math.abs(A-B))/2);
MaiorABC = ((MaiorAB+C+Math.abs(MaiorAB-C))/2);
console.log(MaiorABC + " eh o maior");

//
//if (A > B && A > C){
//    console.log(A + " eh o maior");
//}
//else if (B > A && B > C){
//    console.log(B + " eh o maior");
//} else {
//    console.log(C + " eh o maior");
//}