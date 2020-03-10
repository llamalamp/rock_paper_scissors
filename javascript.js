//variables
const choices = ['rock','paper','scissors'];


function computerPlay () {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}
function userPlay () {
    const playerSelection =prompt('Rock,paper,or scissors?');
    let lPlayerSelection = playerSelection.toLowerCase();
    return lPlayerSelection;
}

function playRound() {
    let lPlayerSelection= userPlay();
    let computerSelection=computerPlay();
    if ((lPlayerSelection == 'rock' && computerSelection=='rock') ||
     (lPlayerSelection == 'paper' && computerSelection=='paper') ||
     (lPlayerSelection == 'scissors' && computerSelection=='scissors'))
    {outcome= "Tie"} 
    else if ((lPlayerSelection == 'rock' && computerSelection=='scissors') ||
     (lPlayerSelection == 'paper' && computerSelection=='rock') ||
     (lPlayerSelection == 'scissors' && computerSelection=='paper'))
    {outcome= "Win"}
    else if ((lPlayerSelection == 'rock' && computerSelection=='paper') ||
     (lPlayerSelection == 'paper' && computerSelection=='scissors') ||
     (lPlayerSelection == 'scissors' && computerSelection=='rock'))
    {outcome= "Lose"}
    else {outcome= "You gotta enter the right thing fool"}  
      return outcome;
      }


function game () {
        
        let compScore = 0;
        let userScore = 0;
        while (compScore<5 && userScore <5) {
            playRound();
        if (outcome=='Lose') {
            compScore++;
        } 
        else if (outcome=='Win') {
            userScore++;
        }
        console.log ('Computer Score:'+compScore);
        console.log('Your Score:'+userScore);
        console.log (outcome);
    }
        if (compScore<userScore) {
            window.alert('YOU WIN!')
        } else if (compScore>userScore) {
            window.alert('YOU LOSE!')
        } else {
            window.alert('IT"S A TIE!');
        }
}
game();