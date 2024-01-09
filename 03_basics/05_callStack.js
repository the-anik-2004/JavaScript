/**How A Javascript file renders is defined in this file. */
let val1=10;
let val2=20;
function addNum(num1,num2){
    let total =num1+num2;
    return total;
}

let result1=addNum(val1,val2);
let result2=addNum(10,20);

/**Steps of Code execution:-
 *      
 *      Step-1:Global Execution/Gobal Environment ->
 * it stroes in the 'this'.
 * 
 *      step-2:Memory phase->all the data,function stores in variables.
 * REMEMBER-at first all the variables are declared as Undefined intially
 * EG:-
 *    val1 <- undefined
 *    val2 <- undefined
 *    
 * REMEMBER-at first all the functions are declared with their Definations intially
 * * EG:-
 *   addNum <- function-defination
 *    
 *    result1<-undefined
 *    result2<-undefined
 * 
 * 
 *     step-3:Execution Phase-> 
 *    val1 <- 10
 *    val2 <- 20
 * 
 *    addNum<- new variable environment + exection thread
 *         step-3.1: addNum's Memory Phase
 *           val1 <- undefined
 *           val2 <- undefined
 *           total<-undefined
 * 
 *         step-3.2: addNum's execution Context
 *             num1<-10;
 *             num2<-20
 *             total<-10+20
 *     
 *    Returns total back to Global Execution and Delete itself
 *         result1=30;
 *     {same process will followed for result2}
 * 
 */