// for loop
 //example.1;-
 for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);//0,1,2,3,4,5,6,7,8,9
    
 }
 
 // nested loop example
 for (let i = 1; i<=10; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j<=10; j++) {
        // console.log(i + "*" + j + "=" + i*j );   
    }
 }
// for loop in array
let myArray = [1,2,3,4];
console.log(myArray.length);//4
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);//1,2,3,4
    
}

// break :- it stops the execution of code after condition is met
for (let i = 0; i <=6; i++) {
    if(i==5){
        console.log("5 is detected");
        break;
    }
    console.log(i);//1,2,3,4,"5 is detected"
}

// continue:- skip the value
for (let i = 0; i <=6; i++) {
    if(i==5){
        continue;
    }
    console.log(i);//1,2,3,4,6
}
