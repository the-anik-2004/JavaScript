class User{
    constructor(email,password){
        this.password=password;
        this.email=email;
    }
    get password(){
        return `${this._password.toUpperCase()}AnikPal123`
    }
    set password(val){
        this._password=val;
    }
    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(em){
        this._email=em;
    }

}
/**You Have to define getters and setters at the same time */

const igUser=new User("Anik@pal.com","abc");
console.log(igUser.password)
console.log(igUser.email)