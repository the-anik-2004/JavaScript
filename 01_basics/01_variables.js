var password="7267353";   //var
let userName="Anik Pal";  //let
const userId=28100122062; //Constant
city="Kolkata";          //With no keyword[BY DEFAULT IT IS 'var']
let state;               //as the variable'state' is not defined by anything ...it is undefined

//userId=28100122063;  //==>We can't update/reassign as it is CONSTANT variable
                       //   as it is defined by 'const' but can't declare it

userName="Rohan";      //==>We can update/reassign the variable as it is defined 
//let userName="Rohan"; // by'let' but can't redeclare it.
                      
password="123456";  //==>We can update/reassign the variable as it is defined 
var password="JS404"; // by'var' and we can also redeclare it.

city="Bengaluru";   //As it is used as  a var by default

console.table([userId,userName,password,city,state]);
/*==================NOTES=================== */
/*

LINE-3
    Prefer not to use var.
    because of issue in block scope and functional scope\

LINE-4
    It is not a good prctice to have ..but  you can also define 
    in that way.

 LINE-5
    As we don't define or assign any value ,so it is "undefined".  
*/
