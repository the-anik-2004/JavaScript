//singleton ==>When a object is made by a consturtor...

//object literals


//creating a symbol.
const sym=Symbol('key1');

const myObj={
    name:"Anik",
    "full name":"Pal",
    age:19,
    [sym]:"I am  a SYMBOL",
    location:"Kolkata",
    email:"anik@google.com",
    isLoggedIn:false,
    lastLoggedIn:["Mon","Wed"]
};
/** NOTES:-
 *      BTS the 'key' are compiled as string.Eg:- name is compliled as "name"
 *,age->"age" , location->"location" etc.
 */

console.log(myObj.location);   
  //==>Not Preferable way to access
console.log(myObj["location"]); 
 //==>Preferable way to access.REMEMBER-here we have to give STRING as parameters.For Eg:-
 console.log(myObj["full name"]);//==>if there is space in a key name,[] is preferrrable,(.) access is not preferable.


 console.log(myObj[sym]);
 console.log([sym]);