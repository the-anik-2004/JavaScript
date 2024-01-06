/**Array takes any form of data for the below example,here the entire array is pushed as an pushed element */
const schoolFrnds=['RANA','SUMON','SAYAN','PRONO','SANTU','CHOTTU','JITU','SUMIT','RAJA'];
const collegeFrnds=['MANOJIT','DEBANJAN','ARNAB','SNEHADWIP','SNIGDHA'];
const family=['BABA','MAA','BUNU'];
// schoolFrnds.push(collegeFrnds);

// console.log(schoolFrnds);
// console.log(schoolFrnds[9][1]);

/*
const frnds=schoolFrnds.concat(collegeFrnds);
console.log(frnds); //concat() add two array in a sinle array
 */

/*++++++++++++++++Spread Operator++++++++++++++++ */
// const allFrnds=[...family,...schoolFrnds,...collegeFrnds];
// console.log(allFrnds);
/**NOTES:- Always prefer spread operator to join two or more array */


/*+++++++++++++Flat+++++++++++++++*/
const mixedArr=[1,2,3,4,[5,6,[7,8,[9,13],10],11],12];
const uniArr=mixedArr.flat(4);//===>Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth..Here '4' is the depth.

// console.log(uniArr);

/** ++++Checking Array and maikng Array++++ */
console.log(Array.isArray("anikArr"));
console.log(Array.from("anikArr")); //you can make anytype to array

let ele1=11;
let ele2=22;
let ele3=33;
console.log(Array.of(ele1,ele2,ele3));

/* **Read**more**Documentattion**about**Array.isArray()**Array.form()**Array.of()** */


