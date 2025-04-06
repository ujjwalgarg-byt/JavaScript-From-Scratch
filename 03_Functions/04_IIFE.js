// Immediately Invoked Function Expression :- IIFE
//defination:- a function which is executed immediately and iife is used for avoiding globle scope's polution

// syntax
(function chai(){ //named iife
    console.log(`db connected`);
    
})();
// here first () is used for function defination and second () is used for execution call

//unnamed iife or iife  in arrow function
((name)=>{
    console.log(`welcome ${name}`);
    
})('Ujjwal');
