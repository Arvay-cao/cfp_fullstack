console.log(1 + 1); //2
console.log(1 - 1); //0
console.log(1 * 1); //1
console.log(1 / 1); //1
console.log(5 % 3); //2

console.log(0.07 * 100); //7.000000000000001

var num = 0.1 + 0.2;
console.log(num == 0.3); //false

var p = 10;
//console.log(p++ + 10);//20
console.log(++p + 10); //21

console.log(123 && 456); //456
console.log(0 && 456); //0

console.log(123 || 456); //123
console.log(0 || 456); //456

var a = 0;
console.log(123 || a++); //123
console.log(a); //0