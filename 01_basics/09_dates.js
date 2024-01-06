// let myDate= new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//======Declare Date=====
//Format:-1
let customDate= new Date(2015,6,13, 13,43,10);
console.log(customDate.toLocaleString());
//NOTES:- Date(year,month[0-11],day,hour[24hrs],minutes,second)

//Format:-2
let customDate2= new Date("08-12-2004");
console.log(customDate2.toDateString());
//NOTES:- Date(year,month[0-11],day,hour[24hrs],minutes,second)


//======Time Stamp====

/**
 let timeStamp=Date.now();
console.log(timeStamp);
console.log(customDate.getTime()); //==>You Can  Compare these dates as per your needs in application. And Always Campare in Mili-Seconds
 */
 
/*console.log(Math.floor(Date.now()/1000));//==>Mili-Seconds -> Seconed */

let newDate= new Date();
console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

let day=newDate.toLocaleDateString('en-In',{
    weekday:"long",
})
console.log(day);


/*
====Date====

JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).*/

