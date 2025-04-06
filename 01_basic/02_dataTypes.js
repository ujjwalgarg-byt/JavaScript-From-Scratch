"use strict" //treat all js code as newer version

//alert(3+3) // we are using nodejs, not browser

console.log(3
    +3); //code readablity should be high
console.log(3+3);

// data types are of two types primitive and non-primitive(refrence type)
//Primitive datatypes:- they are call by value and have 7 types

//number => 2 to power 53
//bigInt => use for big numbers like trading
//string => use in ""
//boolean => ture/false
//null => stand alone value
//undefined => use when value is not defined
//sybol => use for uniqueness

// example of primitive type
let name = "ujjwal"; //string
let age = 21; //number
let isLogged = true; //boolean
let state; //undefined
let a=null;//null 
const bigNumber = 3457927353728272n; //bigInt
const id = Symbol('123'); //symbol


// Non-Primitive datatypes:- 3 types

// Arays
// Objects
// Functions

//example of non-primitive types
const heros = ['shaktiman','naagraj','juniar-g']; // arays

const myObj={
    name:"ujjjwal",
    age:22,
    class:"b.tech",
}; // object

const myFunction=function(){
    console.log("hello world");
    
}; //functions

// for checking the type of any datatype use (typeof) like below

console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof array);// object
console.log(typeof myFunction);//object
console.log(typeof object);//object
console.log(typeof bigInt);//bigInt
console.log(typeof Symbol);//Symbol

