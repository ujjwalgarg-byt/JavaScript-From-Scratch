// for in loop
//ex for objects
const myObj={
    js:"javascript",
    py:"python",
    rb:"ruby",
    cpp:"c++",
};
for(const keys in myObj){
    console.log(`${keys} is shortcut for ${myObj[keys]}`);
    //js is shortcut for javascript
    //py is shortcut for python
    //rb is shortcut for ruby
    //cpp is shortcut for c++
}

// ex for array
const myArray = [1,2,3,4,5];
for (const key in myArray) {
   console.log(myArray[key]);//1,2,3,4,5
   
}
// ex for string:-
const myName = "ujjwal garg";
for(const key in myName){
    console.log(myName[key]);//u,j,j,w,a,l g,a,r,g

}


//+++ for in loop is not use for maps or maps is not iteratable in for in loop