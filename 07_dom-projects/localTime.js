const clock=document.querySelector("#clock");


 setInterval(()=>{
    let d=new Date();
    clock.innerHTML=` <h1>${d.toLocaleTimeString()}</h1>`;
 }
,1000);


/**NOTES:
 * as your are making a digital clock so you have to implement
 * Second.
 * To implemnt this you have to use setInterval method ,which runs autometically after 
 * a spcific time interval.
 * 
 * SYNTAX:- setInterval(()=>{},time);
 * 
 */