// console.log(1>2);
// console.log(1<2);
// console.log(1>=2);
// console.log(1<=2);
// console.log(1==2);
// console.log(1!=2);


// console.log(1<"2");//It autometically convert string to number

console.log(true=="1");//It autometically convert true to 1 and false to 0

/**=====null value comparisons===== */
// console.log(0>null);
// console.log(0==null);
// console.log(0>=null);
/**NOTES:- 
 *  Comparisons converts a null to a number, treating as 0,
 * that's 0>=null is 'true' but 0==null is 'false'.
 */



/**=====Undefined value comparisons===== */
// console.log(0>undefined);
// console.log(0==undefined);
// console.log(0>=undefined);
/**NOTES:- 
 *  Comparisons is 'false'.
 */



/**=====Strict Chcek===== */
console.log("2"===2);