// fisrt method of declaring string
const name = 'Ujjwal';
const age = 21;

console.log(`Hello my name is ${name} and my age is ${age}`);// this method is called string interpolation

// another method of declaring string

const myName = new String("ujjwal garg");
// method use in string
console.log(myName[0]); //u
console.log(myName.length);//11
console.log(myName.toUpperCase());//UJJWAL GARG
console.log(myName.charAt(3));//w
console.log(myName.__proto__);// return objects{}
console.log(myName.indexOf("w"));//3
console.log(myName.substring(0,5));//ujjwa
console.log(myName.slice(7,10));//gar

console.log(myName.replace('garg','aggarwal'));//ujjwal aggarwal
console.log(myName.includes('hey'));//false

const newString = "  hello  ";
console.log(newString);// o/p--(  hello  )
console.log(newString.trim());// remove extra spaces -- o/p is hello

const newName= "ujjwal-21-b.tech-c.s.e";
console.log(newName.split('-'));// make array according to - or given parameter
//['ujjwal','21','b.tech','c.s.e']
console.log('string is completed');

