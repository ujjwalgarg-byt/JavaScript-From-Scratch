

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//here we inject a method in Object so this is inject also in function ,array and string b'coz in js all is object in the end
Object.prototype.ujjwal = function(){
    console.log(`ujjwal is present in all objects`);
}

Array.prototype.heyUjjwal = function(){
    console.log(`Ujjwal says hello`);
}

// heroPower.ujjwal()
// myHeros.ujjwal()
// myHeros.heyUjjwal()
// heroPower.heyUjjwal()// not access

// ++++++++++ inheritance +++++++++++
// inheritance is a mechanism in which one object acquires all the properties and behaviors of a parent object. It allows the creation of a new class (derived class) that is based on an existing class (base class). The derived class inherits the features from the base class and can have additional features of its own.

//syntax
const User = {
    name: "coffee",
    email: "coffee@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,

}
// use __proto__ to access the properties of other object
// like below Teacher object access all properties of user object
Teacher.__proto__ = User


// modern syntax
// use serPrototypeOf to access the properties of other object
Object.setPrototypeOf(TeachingSupport, Teacher)
//ex:-
let anotherUsername = "ujjwalgarg    "
//here we inject a method truelength in strin which trim the extra spaces from the string and return the length of string
//it is access by all string
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();//true length is 10
"ujjwal  ".trueLength();//true length is 6
"iceTea  ".trueLength();//true length is 6
"chai  ".trueLength();//true length is 4