// truthy values are the values which are always asumed as true
// truthy values:- "0",'false'," ",[],{},function(){}(empty function)

// falsy values:-values which are always asumed as false
// falsy values:- false,0,-0,bigInt 0n,,null,undefined,"",NaN

// example of truthy values
//1:-
const userEmail = "ujjwal@gmail.com";
if(userEmail){
    console.log("got user email");
    
}else{
    console.log("don't have user email");
}
//2:-
const arr = [];
if(arr.length==0){
    console.log("array is empty");
}
//Nullish coalescing Operator: Null or Undefined
// used for checking the null and undefined safety
//example:-
let val1;
//val1= 5??10;//5
// val1  = null??10; //10
//val1 = undefined??15;//15
val1= null ?? 10??15;// 10 
console.log(val1);

// Terniary operator
// syntax
//condition ? true:false;
//example:-
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");

