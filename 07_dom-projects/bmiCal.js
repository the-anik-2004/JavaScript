const form=document.querySelector("form");
// const height=document.querySelector("#h");//==>See Notes
// const weight=document.querySelector("#w");//==>See Notes
const weightGuide=(bmi)=>{
    if(bmi<18.6)
    return `Under Weight 💀`;
else if(18.6<=bmi && bmi<24.9)
    return `Normal Weight 💪`;
else
    return `Over Weight 🫨`
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const height=parseInt(document.querySelector("#h").value);
    const weight=parseInt(document.querySelector("#w").value);
    const result=document.querySelector(".result");
    
    console.log(`${height} : ${weight}`)
    if(height==="" || height<0 || isNaN(height)){
        result.innerHTML="Please give a vaild Height";
    }else if(weight===""|| weight<0 || isNaN(weight)){
        result.innerText="Please give a valid Weight"
    }else{
       const bmi= ((weight/(height*height))*10000).toFixed(2);
       console.log(bmi)
       result.innerHTML=`BMI : ${bmi} <br>
       <span>You are in ${weightGuide(bmi)} condition</span>`;
    }
});
/*NOTES:
      In this case,
        If you declare the "height" & "weight" outside the event
        the values are assigned by null at first... you trying to access that after 
        clicling the "Calculate" button.

*/