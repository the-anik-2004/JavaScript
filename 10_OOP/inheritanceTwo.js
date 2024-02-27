class User{
    constructor(un){
        this.userName=un;
    }
    logMe(){
        console.log(`Username is ${this.userName}`)
    }
}

class Admin extends User{
    constructor(username,email,password){
        super(username);
        this.password=password;
        this.email=email;
    }
    addToCart(){
        console.log(`dear ${this.userName}\nYour order will be delivered very soon`);
    }
}

const coustomerOne=new Admin("Hrittik","hr@13.com","12324");
coustomerOne.addToCart();

const coustomerTwo=new User("RANA");
coustomerTwo.logMe();

console.log(coustomerOne instanceof User)
console.log(coustomerTwo instanceof User)
