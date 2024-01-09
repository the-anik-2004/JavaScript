const email1=""
const email2=[]
const email3={}

if(email1){
    console.log("truthy ...as String");
}else{
    console.log("falsy ...as String");
}
if(email2){
    console.log("truthy ...as Array");
}else{
    console.log("falsy ...as Array");
}
if(email3){
    console.log("truthy ...as Object");
}else{
    console.log("falsy ...as Object");
}

/*+++++++++++NOTES++++++++++

//  FALSY VALUEs-
                fasle,0,-0,BigInt 0n,"",null,undefined,NaN
    
    TRUTHY VALUEs-
                  Everything falls under TRUTHY values.
                   EXCEPTION EXAMPLE-
              "0","false"," ",[],{},function(){}-
   
*/

/*++++++++++Checking Empty Array+++++++++ */
const arr=[]
if(arr.length===0){
    console.log("Array is empty");
}else{
    console.log("Array is full");
}

/*++++++++++Checking Empty Object+++++++++ */
const myObj={}
if(Object.keys(myObj).length===0){
    console.log("Object is empty");
}else{
    console.log("Object is full");
}