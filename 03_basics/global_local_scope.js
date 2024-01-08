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