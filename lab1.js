
prompt ("This is a game of Rock, Paper, Scissors. Which will you choose for this round?");
const getUserSelection = userInput => {
 userInput = userInput.toLowerCase(); 
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  }
}
var computerChoice = Math.random();
{
if (0 >= 0.33) { console.log("Rock"); } 
else if (0.34 <= 0.66) { console.log("Paper"); } 
else if (0.67 <= 1) { console.log("Scissors"); }
}
console.log(userSelection);
console.log(computerChoice);