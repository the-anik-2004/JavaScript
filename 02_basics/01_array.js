/**NOTES:-
    JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
 */

// const arr=[1,2,4,5,7,8,5,4,"1nik",true,['hello',12]];==>You can store hetarogeneous data

/**===========Array Basics========== */
const myArr=[1,2,3,4];
// console.log(myArr);  //==>It is 0 based indexing
// console.log(myArr.includes(12))
// console.log(myArr.indexOf(34));

// const newArr= myArr.join(); //==>It coverts to String
// console.log(newArr);
// console.log(typeof newArr);
// console.log(newArr[1]);


//=========Slice & Splice==========
console.log("Orginal ",myArr);

const newArr1=myArr.slice(1,3);//==>it does not Manupulates Original Array
console.log("slice ",newArr1) ;
console.log("Orginal ",myArr);

const newArr2=myArr.splice(1,3);  //==>it Manupulates Original Array
console.log("splice ",newArr2) ;
console.log("Orginal ",myArr);


const myFriends=new Array("Rana","sumon","Arnab","Debanjan","Snehadwip","Snighdha","Manojit")

// console.log(myFriends);

/**===========Array Methods========== */
// myFriends.push("Me");
// myFriends.push("You");
// myFriends.pop();
myFriends.unshift("Shubhashish"); //==>this unshift() METHODS add the elements at the first  ,for that reason rest  of the elements are shifted.If there are huge amount elements in that array,then this opration will be lenghty and heavy.So...TRY TO AVOID "unshift()".
myFriends.shift();
// console.log(myFriends);


