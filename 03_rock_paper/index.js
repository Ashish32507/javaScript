let userCount =0;
let compCount =0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#result");
let userScorePara = document.querySelector("#user-result");
let compScorePara = document.querySelector("#comp-result");

console.log(msg)
console.log(choices);

const drawGame = ()=>
{
    msg.innerHTML="Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin,userChoice,genCompChoice)=>
{
    if (userWin) {
        userCount++;
        userScorePara.innerText = userCount;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
      } else {
        compCount++;
        compScorePara.innerText = compCount;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
      }
      genCompChoice();
};


const playeGame = (userChoice)=>
{
    if(userChoice === compChoice)
    {
        drawGame();
        console.log("hello");
    }
    else{
        let userWin = true;
        if(userChoice==="rock")
        {
            userWin = compChoice ==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin = compChoice ==="scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const genCompChoice =()=>
{
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
};

var compChoice = genCompChoice();

choices.forEach((value)=>{
    value.addEventListener('click',(e)=>{
      const userChoice = e.target.id;
      playeGame(userChoice);
    })
})
// console.log(userChoice())
