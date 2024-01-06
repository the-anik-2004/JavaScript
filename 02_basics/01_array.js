/**NOTES:-
    JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
 */

// const arr=[1,2,4,5,7,8,5,4,"1nik",true,['hello',12]];==>You can store hetarogeneous data

/**===========Array Basics========== */
const myArr=[12,34,72,35];
console.log(myArr);  //==>It is 0 based indexing

const myFriends=new Array("Rana","sumon","Arnab","Debanjan","Snehadwip","Snighdha","Manojit")

console.log(myFriends);

/**===========Array Methods========== */
myFriends.push("Me");
console.log(myFriends);

myFriends.pop("Me");
console.log(myFriends);


