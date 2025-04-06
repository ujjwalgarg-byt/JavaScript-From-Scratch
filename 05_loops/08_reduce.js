// reduce:- it is used to reduce the array to a single value.
// reduce function takes a callback function as an argument.
// reduce function returns a single value.
// reduce function does not change the original array.
// reduce function is a pure function.
// reduce function is a higher order function.
// reduce function is an inbuilt function in javascript.
//ex1:-
const myNums = [1,2,3,4];

const totalSum = myNums.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    
    return acc+currval;
},0)// here 0 is initial value
console.log(totalSum);//10

// or by arrow function
const Sum = myNums.reduce((acc,currval)=> acc+currval,0)
console.log(Sum);

//ex2:-
const shopingCart = [
    {
        itemName:"js course",
        price:1999,
    },
    {
        itemName:"py course",
        price:999,
    },
    {
        itemName:"java course",
        price:2999,
    },
    {
        itemName:"web dev course",
        price:5999,
    }
];

const totalPrice = shopingCart.reduce((acc,item)=> acc+item.price,0);
console.log(totalPrice);
