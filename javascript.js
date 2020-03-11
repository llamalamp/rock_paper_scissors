//variables
const choices = ['rock','paper','scissors'];
const score =document.querySelector('#score');
const lastRound =document.querySelector('#lastRound');
const playerScore =document.querySelector('#playerScore');
const computerScore =document.querySelector('#computerScore');

//Image changes on hover
//No longer needed but keeping for reference
function bigImg(x) {
    x.style.height = "120px";
    x.style.width = "120px";
  }

  function normalImg(x) {
    x.style.height = "150px";
    x.style.width = "150px";
  }
//computer play image change function
function compImageChange() {
    let compSelection = choices[Math.floor(Math.random() * choices.length)];
    if (compSelection=='rock'){
    document.getElementById("compImg").src = "https://vignette.wikia.nocookie.net/spongebob/images/4/45/Pete_the_rock.png/revision/latest?cb=20141115223905";
    } else if (compSelection=='paper'){
        document.getElementById("compImg").src = 'https://vignette.wikia.nocookie.net/spongebob/images/b/b7/The_Paper_014.png/revision/latest?cb=20191111160748'
    } else if (compSelection=='scissors') {    
        document.getElementById("compImg").src = 'https://vignette.wikia.nocookie.net/spongebob/images/2/2a/Bikini_Bottom_Scissor_Works.png/revision/latest?cb=20150709014043'
    }
    return compSelection;
    }

    var compScore = 0;
    var userScore = 0;
//functions for playing the game
function playerRock () {
    let computerSelection=compImageChange();
    if (computerSelection=='rock') 
   {result= "Tie"} 
   else if 
    (computerSelection=='scissors')
   {result= "Win";}
   else if (computerSelection=='paper') 
   {result= "Lose"}
    
   if (result=="Win") {
       userScore++;
   } else if (result=="Lose") {
       compScore++;
   }
   if (userScore==5) {
    window.alert('YOU WIN');
    window.location.reload();
} else if (compScore==5) {
    window.alert('YOU LOSE!');
    window.location.reload();
}

   lastRound.innerHTML = "Last Round Result:"+result;
   playerScore.innerHTML = "Your Points"+userScore;
   computerScore.innerHTML = "Computer Points:"+compScore;
}

function playerPaper () {
    let computerSelection=compImageChange();
    if (computerSelection=='paper') 
   {result= "Tie"} 
   else if 
    (computerSelection=='rock')
   {result= "Win";}
   else if (computerSelection=='scissors') 
   {result= "Lose"}
    
   if (result=="Win") {
       userScore++;
   } else if (result=="Lose") {
       compScore++;
   }
   lastRound.innerHTML = "Last Round Result:"+result;
   playerScore.innerHTML = "Your Points"+userScore;
   computerScore.innerHTML = "Computer Points:"+compScore;
   if (userScore==5) {
    window.alert('YOU WIN');
    window.location.reload();
} else if (compScore==5) {
    window.alert('YOU LOSE!');
    window.location.reload();
}

}

function playerScissors () {
    let computerSelection=compImageChange();
    if (computerSelection=='scissors') 
   {result= "Tie"} 
   else if 
    (computerSelection=='paper')
   {result= "Win";}
   else if (computerSelection=='rock') 
   {result= "Lose"}
    
   if (result=="Win") {
       userScore++;
   } else if (result=="Lose") {
       compScore++;
   }
   if (userScore==5) {
    window.alert('YOU WIN');
    window.location.reload();
} else if (compScore==5) {
    window.alert('YOU LOSE!');
    window.location.reload();
}

   lastRound.innerHTML = "Last Round Result:"+result;
   playerScore.innerHTML = "Your Points"+userScore;
   computerScore.innerHTML = "Computer Points:"+compScore;
}





