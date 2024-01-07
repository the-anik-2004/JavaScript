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

 /**++++++Accessing Objects++++++*/
// console.log(myObj.location);   
  //==>It is most used accessing but Not Preferable way to access,when there is a space in the key name
// console.log(myObj["location"]); 
 //==>Preferable way to access.REMEMBER-here we have to give STRING as parameters.For Eg:-
//  console.log(myObj["full name"]);
 //==>if there is space in a key name,[] is preferrrable,(.) access is not preferable.

//  console.log(myObj[sym]);
 //==>Accessing Symbolsss
//  console.log(sym);
//  console.log(typeof sym);

  /**++++++Object Modification++++++*/

// myObj.email="codespaceofanik@gmail.com";
// myObj["name"]="ROHAN";
// myObj["full name"]="ANIK PAL";
// //==>Modification by [] square operator
// console.log(myObj);

// /*NOTES:-
//     we can restrict a object from modification
// by using : Object.freeze(obj_name) .So that no one can
// modify that Object*/

// Object.freeze(myObj); //==>Now no change is applicable
// myObj["lastLoggedIn"]=['SAT','SUN'];
// console.log(myObj);


/**++++++++Object Function+++++++++ */
myObj.greeting=()=>{
    console.log("Hi there");
}



myObj.greetingTwo=function(){
    console.log(`Hi there ${this.name}`);
}
myObj.greeting();
myObj.greetingTwo()