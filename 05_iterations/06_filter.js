
/*++++++++++++Use of Filter++++++++++++ */
const myNums=[1,2,3,4,5,6,7,8,9,10];

const odd=myNums.filter((num)=>num%2!=0);//==>Filter using Arrow function
const even=myNums.filter(function(num){  
    return num%2==0;
});//==>Fileter using Normal function
console.log("Odd numbers:",odd);
console.log("Even numbers:",even);

/**
 * NOTES:-
  Filter is used to return value based upon a specified condition.
  
  SYNTAX:
       arrow-funtion:array.filter((ele)=>(condition) ---------(preferable)
       normal-function:array.filter(function(ele){return condition;})
 */
const books=[
    {
        title:'Book One',genre:'Fiction',
        publish:1981,edition:2004
    },
    {
        title:'Book Two',genre:'Non-Fiction',
        publish:1992,edition:2008
    },
    {
        title:'Book Three',genre:'History',
        publish:1999,edition:2007
    },
    {
        title:'Book Four',genre:'Non-Fiction',
        publish:1989,edition:2010
    },
    {
        title:'Book Five',genre:'Science',
        publish:2009,edition:2014
    },
    {
        title:'Book Six',genre:'Fiction',
        publish:1987,edition:2010
    },
    {
        title:'Book Seven',genre:'History',
        publish:1986,edition:1996
    },
    {
        title:'Book Eight',genre:'Science',
        publish:2011,edition:2018
    },
    {
        title:'Book Nine',genre:'Fiction',
        publish:1981,edition:1989
    },
]

const bookUser=books.filter((bk)=>bk.genre==="History");
// console.log(bookUser);

const bookPubAfter2000=books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre==="History";
});
console.log(bookPubAfter2000);