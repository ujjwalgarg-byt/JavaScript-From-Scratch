//************************  Numbers  **************************

// declaration rule for numbers
// rule:-1
const score = 100;
console.log(score);//100

// rule:-2
const balance = new Number(400);
console.log(balance);//[Number:400]

// Methods used in Numbers

console.log(balance.toString());//400
console.log(balance.toFixed(2));//400.00
//3-
const num1 = 123.8986;
console.log(num1.toPrecision(4)); //123.9

//4-
const num2 = 1000000;
console.log(num2.toLocaleString()); //1,000,000 by default(in us format)
console.log(num2.toLocaleString('en-IN')); //10,00,000 in indian format

// 5
Number.MAX_VALUE;
//6
Number.MIN_VALUE
//7
Number.MAX_SAFE_INTEGER;
//8
Number.MIN_SAFE_INTEGER;

//++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++
// in js Math is object by default and it is a by default libarary in js
console.log(Math);// object [Math] {}

// properties in Math
console.log(Math.abs(-4)); //4
console.log(Math.round(5.34)); //5
console.log(Math.ceil(5.34)); //6 give upper value
console.log(Math.floor(5.84)); //5 give lower value or value before .
console.log(Math.min(4,5,6,3));// 3
console.log(Math.max(4,5,6,3));// 6

console.log(Math.random());// always give value from 0 to 1
console.log(Math.random()*10);// always give value from 0 to 9
console.log((Math.random()*10)+1);// always give value from 1 to 9

// we have a range and we want a number between that range than use method like below example

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min); // always give value greater than 10 or between range




