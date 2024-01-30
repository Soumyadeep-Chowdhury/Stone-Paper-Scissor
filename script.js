let userScore = 0;
let compScore = 0;

let choicesElement = document.querySelectorAll('.choices');
let msgElement = document.querySelector('#msg');
let userScoreData = document.querySelector('#score-count-user');
let compScoreData = document.querySelector('#score-count-comp');
/*let stoneEle = document.querySelector('#stone');
let paperEle = document.querySelector('#paper');
let scissorsEle = document.querySelector('#scissors');*/

/*let userChoice=()=>{
  stoneEle.addEventListener('click',()=>{
    console.log('STONE');
    return 'stone';
  });
  paperEle.addEventListener('click',()=>{
    console.log('PAPER');
    return 'paper';
  });
  scissorsEle.addEventListener('click',()=>{
    console.log('SCISSORS');
    return 'scissors';
  });
}
userChoice();*/

let computerChoice=()=>{
  let genNo = Math.random()*3;
  if(genNo>0 && genNo<1){
    console.log('stone');
    return 'stone';
  } else if (genNo>1 && genNo<2){
    console.log('paper');
    return 'paper';
  } else {
    console.log('scissors');
    return 'scissors';
  }
}
let gameDraw = () => {
  msgElement.innerText = `Draw Game`;
  msgElement.style.color = 'yellow';
  msgElement.style.backgroundColor = '#08001A';
}

const showWinner = (userWin,userChoice,compChoice) => {
  if(userWin){
    userScore++;
    userScoreData.innerText = `${userScore}`;
    msgElement.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
    msgElement.style.backgroundColor = 'green';
    msgElement.style.color = 'white';

  } else {
    compScore++;
    compScoreData.innerText = `${compScore}`;
    msgElement.innerText = `Computer Won! ${compChoice} beats your ${userChoice}`;
    msgElement.style.backgroundColor = 'red';
    msgElement.style.color = 'white';
  }
}

const playGame = (userChoice) => {
  const compChoice = computerChoice();
  if(userChoice === compChoice){
    gameDraw();
  } else {
    let userWin = true;
    if(userChoice==='stone'){
      userWin = compChoice === 'paper' ? false : true ;
    } else if (userChoice === 'paper'){
      userWin = compChoice === 'scissors' ? false : true;
    } else {
      userWin = compChoice === 'stone' ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choicesElement.forEach((choices)=>{
  choices.addEventListener('click',()=>{
    const userChoice = choices.getAttribute('id');
    playGame(userChoice);
  });
});