let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")
let playerScore = document.querySelector("#playerScore")
let computerScore = document.querySelector("#computerScore")

const winCount = (userWin)=>{
    if(userWin){
        userScore++;
        playerScore.innerText = userScore;

    }
    else{
        compScore++;
        computerScore.innerText  = compScore;
    }
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText = `!!You win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        msg.innerText = `!!You lose ${userChoice} can't beat ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const gameDraw = ()=>{
    msg.innerText = `Draw try again!`;
    msg.style.backgroundColor = "orange";
}

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"]
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];

}


const playGame = (userChoice)=>{
   console.log(`user choice is ${userChoice} `);
   //Generate computer's choice
   let compChoice = genCompChoice();
   console.log(`COmputer choice is ${compChoice} `);
   if (userChoice === compChoice){
        gameDraw();
   }
   else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }
        else{
            userWin = compChoice === "scissors" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
        winCount(userWin);
   }

    
    
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})