let a = 3;
console.log(typeof a);//number

let b="ujjwal";
console.log(typeof b);//string
//for convert b into number use
let c= Number(b);
console.log(typeof c);//number

console.log(c);//NaN(not a number) // but for checking c is a number or not

// values given by datatypes when we convert them into number
//3=> number
//"3abc"=> NaN
//true=> 1
//false=> 0

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//false

// 1=> true , 0=> false
// "" => false
// "ujjwal" => true;

// like above we convert other datatypes into another datatypes

