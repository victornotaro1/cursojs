// IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1;// number

num1 = ((num1 * 100) + (num2 * 100))/100; // 0.8
num1 = ((num1 * 100) + (num2 * 100))/100; // 0.9
num1 = ((num1 * 100) + (num2 * 100))/100; // 1.0

console.log(num1.toFixed(2));

console.log(Number.isInteger(num1));
// console.log(num1.toString(2) + num2);
//num1 = num1.toString(); ele torna realmente string
// console.log(typeof num1);
//console.log(num1.toFixed(2));
// console.log(Number.isInteger(num1));
//let temp = num1 * '15';
// console.log(Number.isNan(temp));
