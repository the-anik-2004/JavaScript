/**
 IIFE:- Immediately Invoked Function Expression ,is a function which runs as soon as it is defined,
 to get rid off from the global scope polution.
 .

USECASE:-
    1. Just making sure that local scope is not polluted/manupulated
    by the global scope .(used in DB connection)

    2.Immediate Execution.

SYNTAX:-
(function_defination)();

+NOTES+:
1.If you an arrow function it must be an Annoymous arrow function or youcan declared it by 'var'
2.when you finish the IIFE ypu should ';' ...otherwise it give error..as it does not know where to
stop the context.

Example:-
 */

//Named IIFE
(function iifeName(){
 console.log("Database is connected through Named IIFE.");
})();

//without any declaration
(iife=()=>{
    console.log("Database is connected through arrow function.");
   })();

//Anonymous
(()=>{
     console.log(`Database is connected through annoymous arrow function.`);
})();

//Anonymous with parameter
((name)=>{
    console.log(`Database is connected through annoymous arrow function by ${name}`);
})("anik");
