/**NOTES:-
 * 
 * PROMISES:
   The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 
   *A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.

fulfilled: meaning that the operation was completed successfully.

rejected: meaning that the operation failed. 


   There are two parts to use promises-
    one is by creating promises
    Second one is by consuming promises 
 */
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,network,cryptography
    setTimeout(function(){
        console.log("Async task is completed");
        resolve(); 
    },1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
})
/**
 .then()->has connection  with resolve part.
 */

 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    },1000);
 }).then(function(){
    console.log("Async 2 resolve")
 })

 /**================Third Promise================== */
 const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
   resolve({username:"Anik Pal",email:'anikpal@gmail.com'});
    },1000);
   
 });

 promiseThree.then(function(user){
    console.log(user);
 })
  /**================Fourth Promise================== */

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({userName:"anikpal_",password:"1234"});
        }else{
            reject("Error...Something is wrong");
        }
    },1000);
});

promiseFour
.then((igUser)=>{
    console.log(igUser);
    return igUser.userName
})
.then((userName)=>{
console.log(userName);
})
.catch((er)=>{
    console.log(er);
})
.finally(()=>{
    console.log("The Promise is either resolve or rejected");
});


 /**================Fifth Promise================== */
const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let JScode=false
        if(JScode){
        resolve({codeName:"JAVASCRIPT",exe:".js"})
        }else{
            reject('JS code is wrong');
        }
    },1000);
})

async function consumePromiseFive(){
   try {
    const response=await promiseFive;
    console.log(response);
   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive();


// Async await-to fetching  data using fetch method throungh Async function

async function getAllUsers(){
try{
    const response=await fetch('https://randomuser.me/api');
    const data=await response.json();
    console.log(data.results[0]);
}
catch(error){
    console.log("E:"+error);
}
}

getAllUsers();


/**Using then */
// fetch('https://randomuser.me/api/')
// .then((response)=>{
//     return response.json()
//     })
// .then((res)=>{console.log(res.results[0]);})
// .catch((error)=>{console.log("MyError:"+error);});

/**
 *THENABLE:-we used this .'then'() to return any data which is written by a 'then'chain to another .'then'() ...we  catch this return 'then''s value to its child 'then'
 */
