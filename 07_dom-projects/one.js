const button=document.querySelectorAll(".button");
const body=document.querySelector("body");

button.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
    //   console.log(e.target.id);
    switch(e.target.id){
        case "grey":
                body.style.backgroundColor=e.target.id;
                body.style.color="black";
                break;
        case "white":
                body.style.backgroundColor=e.target.id;
                body.style.color="black";
                break;
        case "blue":
                body.style.backgroundColor=e.target.id;
                body.style.color="white";
                // body.style.color="black";
                break;
        case "yellow":
                body.style.backgroundColor=e.target.id;
                body.style.color="black";
                break;
        case "black":
                body.style.backgroundColor=e.target.id;
                body.style.color="white";
                break;

    }
    });
})