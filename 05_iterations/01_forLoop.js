//for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element===5){
        // console.log("5 is best number ");
    }
    // console.log(element," "); 

}
/*
     for(let i=1;i<=10;i++){
        console.log(`Outer Loop ${i}`);
        for(let j=1;j<=10;j++){
            // console.log(`Inner Loop Value ${j} :  outer loop value ${i}`);
            console.log(`${i}*${j}=${i*j}`);
        }
    }

}
 */
const myArr=["anik","rohan","dip","priyanshu"];
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element+" ");
    
 }

 /****************Break Continue***************** */
 for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`${i} is my number`);
        // break;   
    }else if(i==10){
        continue;
    }
    console.log(`Value of i is ${i}`);
    
 }
/**break : will treminate the control flow form its outer loop
 * continute : will ignore the control flow till the outer loop's scope exits.
 */
