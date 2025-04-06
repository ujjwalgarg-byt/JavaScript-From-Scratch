//Promise :- the promise obj represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
// A promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

//creation of promise
//syntax 1:-
const promiseOne = new Promise(function(resolve, reject){
    // do an acync task
    //db calls ,cryptography,networkcall
    setTimeout(function(){
        console.log("Async operation is completed");
        resolve();//this method is neccessary to connect then method
    },1000)
})
// promise consuming
promiseOne.then(function(){
    console.log("Promise is resolved");
    
})

//syntax2:-
new Promise(function(resolve, reject){
   
    setTimeout(function(){
        // console.log("Async2 operation is completed");
        resolve();
    },1000)
}).then(function(){
    // console.log("Promise2 is resolved");
    
})

// for connect data from network use 
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"ujjwal",email:"ujjwal@email.com"})
    })
})
promiseTwo.then(function(user){
    // console.log(user);
})

// if we want to handle error then use catch method like below
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"dev",password:"1234"})
        }else{
            reject("ERROR:Something went wrong")
        }
        
    })
})
promiseThree.then(function(user){
    console.log(user);
    return user.username;// to print username use chaining of then method
})
.then(function(username){
    console.log(username);
}).catch(function(err){// catch is used for handling error
    console.log(err);
}).finally(function(){// yeh run hoga hi hoga
    console.log("the promise is either resolved or rejected");
    
})// finally is used for cleanup code


//+++++++++ promises via async await +++++++++++++
// async await is used to consume promise in a synchronous way
//syntax

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"1234"})
        }else{
            reject("ERROR:Something went wrong")
        }
        
    })
})
async function consumePromise(){ //in async await error is handled by try catch block
   try {
    const response = await promiseFour;
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromise();