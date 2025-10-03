let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScores= document.querySelector("#user");
const compScores= document.querySelector("#computer");



const ShowWinner = (userWin,userChoice,compChoise) =>{
if(userWin){
    userScore++;
    userScores.innerText = userScore;
    msg.innerText = "Congrats You Win 👑" ;
    msg.style.backgroundColor = "green";

} else {
    compScore++;
    compScores.innerText = compScore;
     msg.innerText= "You lose 🥲" ;
     msg.style.backgroundColor = "red";
}
}


const playGame = (userChoice) =>{
    console.log("user choise = ",userChoice);
    const compChoise = computerChoice();
    console.log("comp choise = ",compChoise)

    if (userChoice === compChoise){
        msg.innerText = "Draw!! Play Again"
        msg.style.backgroundColor = "grey";
    }else{
        let userWin = true ;
        if(userChoice === "rock"){
            userWin = compChoise === "paper" ? false : true ; 
        } else if (userChoice === "paper"){
            userWin = compChoise === "scissors" ? false : true ;
        } else {
            userWin = compChoise === "rock" ? false : true ;
        }
    ShowWinner(userWin ,userChoice , compChoise);
    }
}
const computerChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randomIndex = Math.floor(Math.random() * 3 );
    return options[randomIndex];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
})