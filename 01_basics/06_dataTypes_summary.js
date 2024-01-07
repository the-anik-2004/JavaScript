//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //=>though the value is same still they are unique.
//SYMBOL USE-CASE:-symbols are use as the keys of object.
/*
  SYNTAX: 
  const symbol_variable=Symbol("It is a symbol");

  const obj={
     [symbol_variable]:value,
  };

  console.log(obj[symbol_variable])

 */
obj

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Anik",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//Stack(Primitive),Heap(Non-Primitive)

let a=10;
let b=a;
 a=20;

 console.log(`a = ${a} : b = ${b}`);

/**   STACK:-  
 *      In a stack memory all the data type are changed in their copy
     * not the real memory is affected.
     
 */
let userOne={
    name:"Ram",
    userId:"ram@123"
}

let userTwo=userOne;
userTwo.name="Sam";
console.log(userOne.name)
console.log(userTwo.name);

/**  
     * HEAP:-
     *  In a heap memory all the data type are changed in their 
     * real memory reference.so the original value is changed.
     *  
 */
