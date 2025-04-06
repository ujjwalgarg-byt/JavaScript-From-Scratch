// while loop
// syntax
// while (condition) {
//     //statement
// }
//ex1:-
let i = 0;
while (i<=5) {
    console.log(i);//0,1,2,3,4,5
    i++;
}

//ex2:-
let arr = ["ujjwal","atul","vansh","aditya"]
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

//++++++++ do while loop
//syntax
// do {
    
// } while (condition);

//ex1:-

let a = 0;
do {
    console.log(`value of a is : ${a}`);//0,1,2,3,4,5
    a++;
} while (a<=5);