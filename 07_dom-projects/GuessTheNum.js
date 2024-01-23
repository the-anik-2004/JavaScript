const checkButton=document.querySelector("#check-btn");
const inputNum=document.querySelector("#inp-num");
const prevGuess=document.querySelector(".guess");
const remainGuess=document.querySelector(".remain");
const progDisplay=document.querySelector(".progress");
const info =document.querySelector(".info");

let target=Math.floor(Math.random()*100+1);
let  playGame=true;
let attempt=0;


function game(){
    if(playGame){
        checkButton.addEventListener("click",(e)=>{
            e.preventDefault();
            const guessNum=parseInt(inputNum.value);
            validation(guessNum);
            inputNum.value="";//==>clearing the input field after submiting
        });
    }
}


function validation(guessNum){
    if(guessNum<1 || guessNum>100){
        alert(`Enter a number in betweek 1 to 100`);
    }else if(isNaN(guessNum)){
       alert(`It is not a Number...Enter a valid Number`);
    }
    else{
        if(attempt>=10){
            
            sendMessage(`<h3>❌Game Over❌<h3><br>The number was ${target}`);
            endGame();
        }else{
            statusUpdate(guessNum);
            guessChecking(guessNum);
        }
    }

}

function guessChecking(guessNum){

       if(guessNum===target){
        sendMessage(`🎉Guess Matched🎉`);
        endGame();
       }
       else if(guessNum<target){
        sendMessage(`Your given number is Low`)
       }
       else{
        sendMessage(`Your given number is High`)
       }
}

function sendMessage(msg){
    progDisplay.innerHTML=`${msg}`;
    progDisplay.style.display="block";
}


function statusUpdate(guessNum){
    prevGuess.innerHTML+=`[${guessNum}] `;
    attempt++;
    remainGuess.innerHTML=`${10-attempt}`;
}


const p=document.createElement('p');
function endGame(){
   
    inputNum.value=""
    inputNum.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h4 class="new-game">New Game</h4>`;
    
    info.appendChild(p);
    playGame=false;
    newGame();


}
function newGame(){
const ng=document.querySelector(".new-game");
ng.addEventListener("click",(e)=>{
    target=Math.floor(Math.random()*100+1);
    prevGuess.innerHTML="";
    attempt=0;
    remainGuess.innerHTML="10";
    inputNum.removeAttribute('disabled');
    progDisplay.setAttribute('style','display:none');
    info.removeChild(p);
    playGame=true;



});
}
//==========Call the game function=========
game();