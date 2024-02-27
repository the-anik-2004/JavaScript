// //It came after ES6

// class User{
    // constructor(username,email,password){
    //     this.username=username;
    //     this.password=password;
    //     this.email=email;
    // }
//     encryptPassword(){
//         return `${this.password}****`
//     }

//    changeUserName(){
//     return `${this.username.toUpperCase()}`
//    }
// }

// const User1=new User("Anik","anik@fb.com","123")
// console.log(User1.encryptPassword());
// console.log(User1.changeUserName());

//Behind The Scene

function User(username,email,password){
    this.username=username;
    this.password=password;
    this.email=email;
}

User.prototype.encryptPassword=function(){
    return `${this.password}****`
}

User.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}

const User2=new User("Rohan","rohan@ms.com","123")
console.log(User2.encryptPassword());
console.log(User2.changeUserName());