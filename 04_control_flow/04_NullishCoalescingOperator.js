//Nullish Coalescing Operator(??) :It works only over null & undefined

let val1;

val1 =5 ?? 10;//==>first value will be assigned
console.log(val1);

val1=null ?? 10;//==>if null came  it have 10 value as a safer side
console.log(val1);

val1=undefined ?? 10;//==>if null came  it have 10 value as a safer side
console.log(val1);

val1=null ?? 10 ??20;//==>if null came  it have 10 value as a safer side
console.log(val1);

//Ternary Operator:

//SYNTAX: condition ? true_statement:flase_statement
const age=19;
(age>18) ?console.log("You are adult"):console.log("You are not adult");