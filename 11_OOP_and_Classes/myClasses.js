
class User{
    //consstructor is a method which is called when we create a object of class
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptpassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}
const user = new User("jack","jacky@gmail.com","1234");
console.log(user.encryptpassword());
console.log(user.changeUsername());

//behind the seen
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());//123abc
console.log(tea.changeUsername());//TEA