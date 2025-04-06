//map function:- it is used to create a new array by calling a function on each element of the input array.
//map function returns a new array of the same length as the input array.
//map function does not change the original array.
//map function is a pure function.
//map function is a higher order function.
//map function is an inbuilt function in javascript.
//map function takes a callback function as an argument.
//ex1:-
const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNumbers = myNumbers.map((num)=>{
    return num+10;
});
console.log(newNumbers);//[11,12,13,14,15,16,17,18,19,20]

//or by for each
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = []
myNums.forEach( (num) => {
    
    newNums.push(num+10)
    
} )
  
console.log(newNums);

//+++++++++ Chaining

const myValues = [1,2,3,4,5,6,7,8,9,10];
const newValues = myValues
                .map((val)=> val*10)//[10,20,30,40,50,60,70,80,90,100]
                .map((val)=> val+1)//[11,21,31,41,51,61,71,81,91,101]
                .filter((val)=> val>=40)//[41,51,61,71,81,91,101]
console.log(newValues);
