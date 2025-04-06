// for each loop:- it is mainly use for array
// ex 1:-
 const coding = ["js","java","python","cpp"]

 coding.forEach( function(item){  // by callback function
    console.log(item);
    //js
    //java
    //python
    //cpp
 });

 // or
 coding.forEach( (item)=>{ // by arrow function
    console.log(item);
    //js
    //java
    //python
    //cpp
    
 });

 //or
 coding.forEach((item,index,arr)=>{ //for printing all array
    console.log(item,index,arr);
    //js 0 ["js","java","python","cpp"]
    //java 1 ["js","java","python","cpp"]
    //python 2 ["js","java","python","cpp"]
    //cpp 3 ["js","java","python","cpp"]
    
 });

 //ex2:-
 //if we have objects in an array
 const myArray =[
    {
        languageName:"javascript",
        languageFile:"js",
    },
    {
        languageName:"python",
        languageFile:"py",
    },
    {
        languageName:"java",
        languageFile:"java",
    },
    
 ];

 myArray.forEach( (item)=>{
    console.log(item.languageName,item.languageFile);
    //javascript js
    //python py
    //java java
 })

