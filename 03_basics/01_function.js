// function add(a,b){
//     console.log(a+b);
// }
/*Here a,b are parameters.

PARAMETER:-A PARAMETER is the variable listed inside the pernthesisin the function defination.
 */

// add(10,20);
/*Here 10,20 are arguments.

ARGUMENTS:-An ARGUMENTS is the value that is sent to the function when it is called.
 */

function add(a,b){
    return a+b;
}

let result=add(10,20);
// console.log(result);

function loginUserMsg1(name){
    if(!name){
        return "Please enter your user name";
    }
    return `Congratulations ${name} `;
}
// console.log(loginUserMsg1("Anik"));
// console.log(loginUserMsg1());
// console.log();

function loginUserMsg2(name="user"){ //Giving default value
    return `Congratulations ${name} `;
}

// console.log(loginUserMsg2("Anik"));
// console.log(loginUserMsg2()); //==>Here the result will be "undefined".



/**++++++++Rest Opertator++++++++++ */

// function calculateCartPrice(val1,val2,...num1){
//     return num1;
// }
 //==>val1->1st ele,val2->2nd and rest of the value will be in num1

/**NOTES --Rest Opertator:Simply adds all the parameters which is passed during finction calling */

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(2,4,5,12,45,344,67,68));



/**+++++++++Passing Operator as Argument++++++++++ */
const phone={
    brand:"realme",
    model:"8i",
    price:14000
}

function handleObject(obj) {
    return `${obj.brand} : ${obj.model} : ${obj.price}` 
}

let target=handleObject(phone);
console.log(target)

let targetDirect=handleObject({
    brand:"iPhone",
    model:"15",
    price:79999
});
console.log(targetDirect)


/**+++++++++Passing Array as Argument++++++++++ */
const array=[10,20,30,40,50,60,70,80,90];

function return2ndValue(getARRAY){
    return getARRAY[1];
}

console.log(return2ndValue(array));
console.log(return2ndValue([12,24,36,48,60]));