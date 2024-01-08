/**NOTES:-
 * The scope is the current context of execution in which values and expressions are "visible" or can be referenced.
 * 
 eg:-{}
 */
let a=100;
var c=300; 
{
    let a=10
    const b=20;
    var c=30;
    console.log("LOCAL-SCOPE: ",a);
}

console.log("GLOBAL-SCOPE: ",a);
// console.log(b);
console.log(c);  //==>Here Var is accessible outside of the scope.


/**Notes:- 
  1.The inside{} is BLOCK-SCOPE and outside is GLOBAL-SCOPE .
  
  2.All the variables are,which are declared in GLOBAL-SCOPE, are  available in LOCAL-SCOPE...but LOCAL-SCOPE variable are not avaliable in GLOBAL-SCOPE*/

  /*++++++++++NESTED SCOPE+++++++++++ */
function one() {
    const name="anik";
    function two(){
        const nickName="rohan";
        console.log(name);
    }
    // console.log(nickName); //==>you cannot access it is available only to function two()'s scope.
    two();
}
one()

/**NOTES:-
 * parent/Global cannot access the variable of child/block scope but child/block can access the variable of parent/Global scope
 */




/**+++++++++Expression++++++++++ */

// console.log(exp(7)); 
  /*==>Here you have got error due hoisting
    as the method-function-experess is stored in a varibale & called before its defenation*/


const exp=function(num2x){
    return num2x*2;
}
// console.log(exp(7));  

/**
 NOTES: HOISTING:
   JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

   EXAMPLE:-
 */
   const x = 1;
   {
     console.log(x); // ReferenceError
     const x = 2;
   }
   