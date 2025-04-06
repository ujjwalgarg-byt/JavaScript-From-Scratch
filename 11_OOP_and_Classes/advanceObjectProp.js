
// console.log(Math.PI);
// Math.PI = 5;//here we cant ocer write value of pi
// console.log(Math.PI);

// Object.getOwnPropertyDescriptor(obj, prop) id used to find hidden properties of an object like below we want to find pi value of math object
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);//return the hidden property pi in object Math

//ex:-
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));//here we get the hidden property of name in chai object
//now here we define the property of chai object as non writable and non enumerable
Object.defineProperty(chai, 'name', {
    writable: false,//use to disable overwriting of property
    enumerable: false,//use to disable iteration of property
    configurable: false//use to disable deletion of property
    
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// now here is a method by whit we can iterate a object and get all the properties of object
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}