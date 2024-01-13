const coding=["js","rb","py","java"];

/*********Using Arrow Function******* */

coding.forEach((ele)=>{
//     console.log(ele);
});


/*********Using Different Function******* */

const printMe=(val)=>{
//     console.log(val);
}

// coding.forEach(printMe)


/*********Accessing value-index-an arr ******* */
coding.forEach((item,index,arr)=>{
//    console.log(item,index,arr);
})


//==================Very Very useful concept==================
/*************accessing array of objects************* */
const language=[
    {
        langName:"Bengali",
        langCode:"beng"
    },
    {
        langName:"English",
        langCode:"eng"
    },
    {
        langName:"Sanskrit",
        langCode:"snkt"
    }

]

language.forEach((objEle)=>{
    console.log(`${objEle.langCode} refers to ${objEle.langName} `);
});

/**Notes:-Here every ele of the array has its specifed property... */