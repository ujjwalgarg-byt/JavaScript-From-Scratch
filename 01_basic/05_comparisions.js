// some basic comparision 
console.log(2>1);
console.log(2<1);
console.log(2>=2);
console.log(2<=4);
console.log(2==3);
console.log(2!=6);


// here are some comparasions which are mostly avoided
console.log(2!=1);
console.log(2>1);

console.log(null>0); // false
console.log(null>=0); //true
// the reason is that in js an eqality check(==) & comparisions(<,>,<=,>=) work diffrently b'coz comparision convert null to a number.
// treating it as 0.that's why (null>=0) is true and (null>0) is false.
console.log(null==0); //false

console.log(undefined>0); //false
console.log(undefined>=0); //false
console.log(undefined==0); //false

// so for instead of these use strict comparision(===)
console.log("2"===2); //false
//b'coz it also check datatypes with comparision



