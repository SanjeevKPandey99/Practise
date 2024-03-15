let buttons = document.querySelectorAll(".box")
let winner = document.querySelector(".winner")
let reset = document.querySelector(".resetBtn")
let newGame = document.querySelector(".newGame")
let msg = document.querySelector(".msg")
player = true;

const winnerPattern = [
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]
]

buttons.forEach(function (i){
  i.addEventListener("click",()=>{
    if(player){
        i.innerText = "O"
        player= false;
    }
    else{
        i.innerText = "X"
        player = true;
    }
    i.disabled = true;
    checkwinner();
})
      
})

function buttonsDisabled(){
    for(let b of buttons){
        b.disabled = true;
    }
}

function buttonsEnabled(){
    for(let b of buttons){
        b.innerText="";
        b.disabled=false;
    }

}

function showWinner(win){
    msg.innerText = `!Congratulation ${win} is the winner`;
    winner.classList.remove("hide");
    newGame.classList.remove("hide");
    buttonsDisabled();
    
}

function resetGame(){
    player = true;
    winner.classList.add("hide");
    newGame.classList.add("hide");
    buttonsEnabled();
}

function checkwinner(){
    for(let pattern of winnerPattern){
        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;

        if( pos1Val!="" && pos2Val!= "" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                
            }
        }
    }
}


reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);


