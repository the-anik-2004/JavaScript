const form=document.querySelector("form");
const target=Math.floor(Math.random()*100+1);
console.log(target);
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const gNum=parseInt(document.querySelector("#inp-num").value);
    console.log(gNum);
    // console.log(typeof gNum);

});