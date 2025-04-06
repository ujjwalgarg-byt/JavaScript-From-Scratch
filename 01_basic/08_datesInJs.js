let myDate = new Date();
console.log(myDate);
//methods
console.log(myDate.toString()); // Tue Jan 28 2025 07:56:20 GMT+0000(coordinated Universal Time)
console.log(myDate.toDateString()); // Tue Jan 28 2025
console.log(myDate.toLocaleString()); //1/28/2025, 7:56:20 AM
console.log(myDate.getDay()); //2
console.log(myDate.getMonth()); //0 b,coz in js month starts from 0
console.log(myDate.getFullYear()); // 2025
console.log(typeof myDate); // object

// declaration method
//1
let myNewDate = new Date(2025,0,23);
console.log(myNewDate.toDateString()); //Thu Jan 23 2025
//2
let myDate2= new Date("2025-01-04");
console.log(myDate2.toDateString()); //Sat Jan 04 2025

//3
let myDate3 = new Date("01-02-2025");
console.log(myDate3.toLocaleString()); // 1/2/2025 ,12:00:00 AM

// time stamp 
let myTimeStamp = Date.now()
console.log(myTimeStamp); // value in mili second form 01/01/1970
console.log(myDate3.getTime());

// for convert in sec use
console.log(Math.floor(Date.now()/1000));



