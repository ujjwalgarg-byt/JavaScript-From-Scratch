class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    //here static is used to stop the access of this method from object
    static createId(){
        return `123`
    }
}

const user = new User("ujjwal")
// console.log(user.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());//error