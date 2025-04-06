// Object declaration by constructors 
//Singleton Objects creation
// const  snapchatUser = new Object();  // singleton object

const snapchatUser ={};// non singleton obj
snapchatUser.id = "123abc";
snapchatUser.name = 'abc';
snapchatUser.isLoggedIn = false;
// console.log(snapchatUser);

// methods in objects
console.log(Object.keys(snapchatUser)); //return keys of object(id,name,isLoggedIn)
console.log(Object.values(snapchatUser));//return values of object's keys("123abc",'abc',false)
console.log(Object.entries(snapchatUser));//return arrays of key and values
console.log(snapchatUser.hasOwnProperty('id'));// check this property belong to obj or not

//object chaining
const userObj={
    email:"user@gmail.com",
    fullname:{
        username:{
            firstname:"ujjwal",
            lastname:"garg",
        },
    },
};
console.log(userObj.fullname.username.firstname);//ujjwal
console.log(userObj.fullname.username.lastname);//garg

// merging two or more objects
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

//1:-
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);//{1:"a",2:"b",3:"a",4:"b"}

//2:-
const obj4 = {...obj1,...obj2};
console.log(obj4); //{1:"a",2:"b",3:"a",4:"b"}

//+++++++++++++++ De-structuring of Objects ++++++++++++

const course={
    name:"JavaScript",
    price:1000,
    courseInstructor: "chai aur code",
};
//console.log(course.courseInstructor);
// instead of this we use :--

const {courseInstructor : instructor}=course; // this is called object's destructuring
console.log(instructor);


