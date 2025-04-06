// Array

//declaration
const arr = [1,2,3,4,5];
//or
const arr2 = new Array(1,2,3,4);
console.log(arr2[0]);

// Methods
const myArr = [1,2,3,4,5,6,7,8];
myArr.push(10)// add value at the end
myArr.pop();// delete value from the end
myArr.unshift(3);//add value at the begining
myArr.shift();//delete value from the begining
console.log(myArr);
console.log(myArr.includes(66));//false
console.log(myArr.indexOf(3));//2
console.log(myArr.indexOf(33));//-1

const newArr = myArr.join();
console.log(newArr); //convert array into string

// slice,splice
console.log("A ",myArr);

const myAr1 = myArr.slice(1,3);
console.log(myAr1);
console.log("B ",myArr);


const myAr2 = myArr.splice(1,3);
console.log(myAr2);
console.log("C ",myArr);

// for merging two arrays we use concat and spread method
// 1-concat method:-
const myFav_heros=['spiderman','ironman','thor'];
const myFriendFav_heros=['superman','flash','batman'];

//merge
const all_heros = myFav_heros.concat(myFriendFav_heros);
console.log(all_heros); //['spiderman','ironman','thor','superman','flash','batman'];

//2-spread method:-
const all_new_heros = [...myFav_heros,...myFriendFav_heros];
console.log(all_new_heros); //['spiderman','ironman','thor','superman','flash','batman'];

//+++++ if we have multiple array in an array than we use flat method like below ++++++
const another_array = [1,2,3,4,5,[6,7],8,[9,10,[11,12]]];
const new_array = another_array.flat(Infinity);
console.log(new_array); //[1,2,3,4,5,6,7,8,9,10,11,12]

// ++++ If we want to convert a datatypes into array then we use from() like below
console.log(Array.isArray("Ujjwal"));// for check it is array or not //op-false
// for convert use
console.log(Array.from("Ujjwal"));//['u','j','j','w','a','l']
console.log(Array.from({name:"ujjwal"}));//interesting case



// +++++ If we have multiple values and we want them to convert in array then we use of()
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));//[100,200,300]





