function getUserChoice(userChoice){
    const choices=['rock','paper','scissors'];
    const computerChoice=choices[Math.floor(Math.random()*3)];
    const result=determineWinner(userChoice,computerChoice);
    displayResult(result,userChoice,computerChoice);
}

function determineWinner(userChoice,computerChoice){
    if(userChoice===computerChoice){
        return 'It is a tie';
    }

    if(
        (userChoice === 'rock' && computerChoice=== 'scissors')||
        (userChoice === 'paper' && computerChoice=== 'rock')||
        (userChoice === 'scissors' && computerChoice=== 'paper')
    ){
        return 'You Win !';
    }
    else{
        return 'You Lose!';
    }
}

function displayResult(result,userChoice,computerChoice){
    const resultElement=document.getElementById('result');
    resultElement.innerHTML=`${result} You chose ${userChoice}. Computer chose ${computerChoice}.`;
    resultElement.classList.add('show');

    setTimeout(()=>{
        resultElement.classList.remove('show');
    },3000);
    
}