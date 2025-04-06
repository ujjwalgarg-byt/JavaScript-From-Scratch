//call method in js:- it is used to hold the refrence of the function and call the function with the help of that refrence

//ex:-

function setUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this,username);// here we call setUsername function with the help of call method and pass the refrence of this object
    this.email = email
    this.password = password
}

const user = new createUser("dev","dev@fb.com","1234");
console.log(user);
