function randomColor(){
    const hex="0123456789ABCDEF";
    let hexColor="#";
    for(let i=0;i<6;i++){
        hexColor+=hex[Math.floor(Math.random()*16)];
    }
    return hexColor;
}

function colorChange(){
    document.body.style.backgroundColor=randomColor();
}

let myInterval;
document.querySelector("#start").addEventListener("click",()=>{
    if(!myInterval){
        myInterval=setInterval(colorChange,1000);
    } 
});

document.querySelector("#stop").addEventListener("click",()=>{
    clearInterval(myInterval);
    myInterval=null;
});