// declaration of object
//1-- if we declare obj by cunstructors then type of that obj is singleton object
//ex- Object.create
//2-- by object literals like below

const mySym = Symbol("key1");

const myObj = {
    name:"Ujjwal",
    "full name":"Ujjwal garg",
    age:21,
    email:"ujjwalgarg@google.com",
    location:"dehradoon",
    isLoggeIn:false,
    [mySym]:"mykey1",// use [] for symbol
};
//accessing of obj
console.log(myObj.name);//Ujjwal //mostly use
//or
console.log(myObj["name"]);//Ujjwal //use in special cases or in some datatypes like symbol
console.log(myObj[mySym]);

// if we want to change some of object keys then use 
myObj.email = "ujjwal@email.com";
console.log(myObj.email);//ujjwal@email.com
console.log(myObj);

// if we do not want to change object then use
// Object.freeze(email);

// for adding a function into a object use
myObj.greetings = function(){
    console.log(`hello Js user,${this.name}`); //(this.name) is use to refrence name key from myObj
    
};
console.log(myObj.greetings());// hello js user,ujjwal



// for delete a key from object use delete keyword
delete myObj.email;