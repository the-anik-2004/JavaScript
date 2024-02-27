class User{
    constructor(un){
        this.userName=un;
    }
    logMe(){
        console.log(`Username : ${this.userName}`)
    }

    static createId(){
        return `123`
    }
   }

const sumon=new User("Sumon Ghosh");
// console.log(sumon.createId()); /**NOTE:-'Static' key word stop the access to the instance variable  */


class Owner extends User{
    constructor(userName,email){
        super(userName);
        this.email=email;
    }
}
const iphone=new Owner("iPhone","i@ph.com");

iphone.logMe();
console.log(iphone.createId());// console.log(sumon.createId()); /**NOTE:-'Static' key word stop the access to the instance variable  */
