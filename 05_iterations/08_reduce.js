const nums=[1,2,3];

const initVal=0;
//++++Using Normal Function Implement Reduce++++
// const total=nums.reduce(function(acc,curVal){
//     console.log(`Accumulator:${acc} 
// Current Vaue:${curVal} `);
//     return acc+curVal},0);

/*++++Using arrow Function Implement Reduce++++*/
const total=nums.reduce((acc,curVal)=>acc+curVal,initVal)

console.log(total);
/**
 NOTES:-
 reduce() method is specially use accumulator to store a value...and first time you have to set the value of accumulator by spearating callBack function using comma(,)

 SYNTAX:-
 .reduce((ACCUMUATOR,CURRENT_VALUE)=>ACCUMULATOR+CURRENT_VALUE,INITIAL_VALUE_OF_ACC);
 */

 /**Shopping  */
 const cart=[
    {
        itemName:"MIVI earbuds",
        price:1200
    },
    {
        itemName:"Bag",
        price:600
    },
    {
        itemName:"shirt",
        price:1099
    },
    {
        itemName:"Realme 8i",
        price:14000
    },
 ]

 const totalCost=cart.reduce((acc,product)=>acc+product.price,0);
 console.log(totalCost);