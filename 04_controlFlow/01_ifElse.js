// If Else statement

//syntax
// if(condition){
//     //statement
// }else{
//     //statement
// }

//example:-
const age = 19;
if(age>=18){
    console.log("eligible for driving");
    
}else{
    console.log("not eligible");
}

// else if statement or nesting

const balance = 1000;
if(balance < 500){
    console.log("less than 500");
    
}else if(balance <750){
    console.log("less than 750");
}else{
    console.log("greater than 750");// greater than 750
}

// implicit scope
const score = 100;
if(score <200) console.log("less than 200");
// mostly avoided


// ++++++++++++++ if we have multiple condition to check
//ex.1:-
const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard){
    console.log("allow to withdraw money");
    
}
//ex.2:-
const loggedFromGoogle = true;
const loggedfromEmail = false;
if(loggedFromGoogle || loggedfromEmail){
    console.log("allow to login");
    
}