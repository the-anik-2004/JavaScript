function setUserName(un){
 this.userName=un;
 console.log("USERNAME is SET");
}

function createUser(userName,email,password){
  
    // setUserName(userName)//actually this fn is not called it yet
    setUserName.call(this,userName)//==>this and call are use here to pass the current context
    this.email=email;
    this.password=password;

}
const chai=new createUser("chai","chai@fb.com","12334");
console.log(chai);
/**
 * NOTE:-The call() method of Function instances calls this function with a given this value and arguments provided individually.
 */
