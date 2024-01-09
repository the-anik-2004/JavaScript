// const user={
//     userName:"ANIK",
//     id:"123ABC",
//     msg1:function () {
//     console.log(`${this.userName}, Welcome to our Website!`); 
//     },
//     msg2:()=>{
       
//         console.log(`${this.userName}, Welcome to our Website!`); 
//     }
    
// }

// user.msg1();
// user.msg2();
// console.log(this);


/**
 *
NOTE:- only 'this' keyword in NODE environment return empty object '{}'
but in the browser will have Window object,which is Global Object */

// function fn(){
//     // let type="FUNCTION"
//     console.log(this.type);
// }
// fn();

/*+++++++++Arrow Function+++++++++++*/

//Basic Arrow Function/Explict return function(return statement is present):
const addTwo=(n1,n2)=>{
    return n1+n2;
}
console.log(addTwo(10,20));

//Implicit Return Function(return function is not present):

// const multiTwo=(n1,n2)=>n1*n2; //Implict Return
const multiTwo=(n1,n2)=>(n1*n2); //==> It  is good practice to use '()'
/**
 NOTE:-if you {} then you have write a return statement
 */

console.log(multiTwo(10,20));
// const fn=()=>{
//     console.log(this);
// }
// fn();