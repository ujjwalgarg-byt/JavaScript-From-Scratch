// for of loop
//ex for array:-
const arr = [1,2,3,4,5];
for (const val of arr) {
    console.log(val); //1,2,3,4,5
    
}

// ex for string:-
const myName = "ujjwal garg";
for(const key of myName){
    console.log(key);//u,j,j,w,a,l g,a,r,g

}


// ex for MAPS:-
const map = new Map();
map.set('In',"india")
map.set('Usa',"united state of america")
map.set('Fr',"france")

for (const [key,values] of map) {// this syntax is used only for map
    console.log(key ,':-', values);
    //In:-india
    //Usa:-united state of america
    //Fr:-france
    
}

// for of loop is not use for objects. we use for in loop for obj