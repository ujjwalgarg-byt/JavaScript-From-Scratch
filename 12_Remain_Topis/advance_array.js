// array types
//1:-Continuous(packed) array
//types:-
//SMI(small integer)
//Packed element
//Double element(float,string,function)

//2:-Holey array
//types:-
//SMI(small integer)
//Holey-Packed element
//Double element(float,string,function)

//ex:-
//1:-Continuous(packed) array

const arrOne = [1, 2, 3, 4, 5];
//packed-SMI element

arrOne.push(6.0);
//Packed-double element

arrOne.push("hello");
//Packed element

//2:-Holey array
arrOne[10] = 10;
//Holey-SMI element

console.log(arrOne);//[ 1, 2, 3, 4, 5, 6, 'hello', <3 empty items>, 10 ]
console.log(arrOne.length);//11
console.log(arrOne[9]);//undefined

//for checking holrs in an array us some methods of checking

//bond check
//hasOwnProperty(arrOne,9)
//hasOwnProperty(arrOne.prototype,10)
//hasOwnProperty(Object.prototype,10)

// So holes are expensive in js

//order of optimized element in continuous array
// SMI > Double > Packed element

// order in holey 
// H-SMI > H-Double > H-Packed

//ex:-
const arrTwo = new Array(3); //mostly avoided
//just 3 holes,holey-smi-elements
arrTwo[0]='1'; //HOLEY-ELEMENT
arrTwo[1]='2'; //HOLEY-ELEMENT
arrTwo[2]='3'; //HOLEY-ELEMENT

//ex:-
const arrThree = [];
arrThree.push('1');//Packed-Element
arrThree.push('2');//Packed-Element
arrThree.push('3');//packed-Element
arrThree.push('4');//packed-Element
