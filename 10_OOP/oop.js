// const user={
//     userName:"Anik",
//     logCount:8,
//     signedIn:true,
//     getUserDetails:function(){
//        console.log(`${this.userName} : ${this.logCount} : ${this.signedIn}`) 
//     }
// }

// console.log(user.userName);
// // user.getUserDetails();
// console.log(this);

function User(userName,logCount,isLoggedIn){
    this.userName=userName;
    this.isLoggedIn=isLoggedIn;
    this.logCount=logCount;
    this.getUserDetails=function(){
               console.log(`${this.userName} : ${this.logCount} : ${this.signedIn}`)
    }

    return this;//==>There is no need to mention return statement as it is defined implicitly 
}

// const user1=User("ANIK","3",false);
// const user2=User("ROHAN","11",true);
// console.log(user1);

//==>Here the values are Overwritten as,the original copy is updated...to prevent this use "new" keyword.


const user1=new User("ANIK","3",false);
const user2=new User("ROHAN","11",true);
console.log(user1);
console.log(user2);
console.log(user1 instanceof User);
console.log(user2 instanceof User);
// console.log(user1.constructor);

/**NOTE:-
 *  'new' keyword:-
 *          firstly, 'new' keyword creates an empty object called instance .
 * 
 *      secondly, a construtor function is called due to 'new' keyword.
 * 
 *      thirdly,arguments are injected to 'this' keyword. 
 *      
 *      fourthly,we get seperated unique object having different instances.
 */