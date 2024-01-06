/**Normal Declartion */
// const bal=6.29;
// console.log(typeof bal);

/**Declartion throubgh object */

// const bal=100;
// const balance= new Number(bal);
// console.log(bal);
// console.log(balance.toString().length);

const score=6.59677;
// console.log(score.toFixed(2));
// console.log(score.toPrecision(3));
// console.log(score.toPrecision(1));

const num=1000000;
// console.log(num.toLocaleString('en-IN'));
// console.log(Number.MIN_VALUE)

//++++++++++++++++++++Maths+++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-12));       //==>Always Holds positive value 
// console.log(Math.round(4.6));     //==>nearest Value
// console.log(Math.ceil(4.2));      //==>Highest value
// console.log(Math.floor(4.6));     //==>lowest value
// console.log(Math.sqrt(225));
// console.log(Math.max(12,35,1,56,53));
// console.log(Math.min(12,35,1,56,53));


//-------Random Value form 0 to a Number-------
// console.log(Math.round((Math.random()*10 )+1));

//-------Random Value form MIN to MAX-------
const min=10;
const max=20;
const number=Math.floor((Math.random()*(max-min+1))+min)
console.log(number);
//NOTES: randomNumber= random*(rangeCount={max-min})+min
