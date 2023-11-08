// rock paper scissors 
// function for gettting computer choice 
// a single round with player choice 
// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection
// Write a NEW function called game() and 5 round using loop 
// winner counter draw 0, win point 1 to the winning team.
// the higer the point it's the winner

const tools = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
  return tools[Math.floor(Math.random() * tools.length)];
}

function getPlayerChoice(){
  let choice = prompt(`Hey choose anything from this ${tools.join(", ")}`).toLowerCase()
  if(!tools.includes(choice)){
    alert(`Please enter only from the ${tools.join(", ")}`)
  return getPlayerChoice()
  }
  return choice
}

function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    console.log("It's a draw you both selected the same")
  } else if (
            (playerSelection === "rock" && computerSelection === "scissors")
          ||(playerSelection === "paper" && computerSelection === "rock")
          ||(playerSelection === "scissors" && computerSelection === "paper")
            ){
    console.log(`You win, ${playerSelection} beats ${computerSelection}`)
    playerScore++
  }
  else {
    console.log(`You lost, ${computerSelection} beats ${playerSelection}`)
    computerScore++
  }
}

function game(){
  for (let i = 0; i < 5; i++){
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection);
  }
 if (playerScore > computerScore){
    console.log(`Winner Winner, You win \n ---Score board--- \n Your score: ${playerScore} Computer score: ${computerScore}`)} 
 else if (computerScore > playerScore){
    console.log(`Loser Loser, You lost. \n ---Score board--- \n Your score: ${playerScore} Computer score: ${computerScore}`)}
 else {
    console.log(`Draw, \n ---Score board--- \n Your score: ${playerScore} Computer score: ${computerScore}`)};
}

game()
