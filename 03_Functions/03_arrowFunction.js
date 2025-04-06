// before arrow function we talks about (this) keyword
const user={
    username:"ujjwal",
    age:21,
    welcomeMsg:function(){
        console.log(`${this.username} , welcome to the website`); //here this keyword is used for refrence current context
        // console.log(this);
        
        
    }

}
user.welcomeMsg();//ujjwal , welcome to the website;
user.username = "sam";
user.welcomeMsg();//sam , welcome to the website; b'coz conext is changed here now it is current context and this refers it

console.log(this);//{} empty object only for node not for browser

// syntax of arrow function

//1-
const addTwo =(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(2,3));//5
//2-
const addoThree=(num1,num2,num3)=> num1+num2+num3;
console.log(addoThree(1,2,3));//6

//3-
const addOne=(num1)=> (num1+1);
console.log(addOne(3));//4
