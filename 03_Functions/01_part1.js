//syntax
function sayMyName(){
    console.log("U");
    console.log("j");
    console.log("j");
    console.log("w");
    console.log("a");
    console.log("l");
    
}
sayMyName();// here sayMyName is refrence and () is for execution

// add two no.

function addTwoNumbers(num1,num2){ // here num1,num2 are parameters
    return num1+num2;
    console.log("ujjwal");// it is not print here b'coz after return no statement in executed
    
}
const result = addTwoNumbers(3,4);// here 3,4 are arguments
console.log("Result is:", result);

// other way for passing parameters
function loginUserMsg(username){
    // check value is undefinrd or not
    if(!username){ // or if(username===undefined)
        console.log("please enter username");
        return;
        
    }
    return `${username} just logged in`;
}
// console.log(loginUserMsg("Ujjwal"));
console.log(loginUserMsg()); //if we don't pass any value then it returns undefined

// if we have multiple value to pass and we take only one parameter then we use rest operator (...) like below 
function calculateCartprice(...num1){
    return num1;
}
console.log(calculateCartprice(200,300,400));//[200,300,400]
 
// how a object is pass into a function
const user={
    username:"ujjwal",
    age:21,
};
function passObject(anyobject){
    console.log(`user name is ${anyobject.username} and age is ${anyobject.age}`);
    
}
passObject(user);//user name is ujjwal and age is 21

// or
passObject({
    username:"diya",
    age:18,
});//user name is diya nad age is 18

// how an array is passed into a function

const myArray = [1,2,3,4,5];
function passArray(getarray){
    console.log(getarray);
    
}
passArray(myArray);//[1,2,3,4,5]
