//getter and setter are used to get and set the value of an object

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();//(_) is used to make a property private
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}@123`
    }

    set password(value){
        this._password = value
    }
}

const me = new User("ujjwal@abc.com", "abc")
console.log(me.email);//UJJWAL@ABC.COM
console.log(me.password);//abc@123