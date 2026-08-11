/*
    Rock Paper Scissors - game logic

    Defining these variables at the top level (instead of inside a function)
    means we only ever look them up once with querySelector, rather than
    on every function call. Note: if these were declared inside playGame()
    instead, the reset button's inline JS (in RPS.html) would break, since
    it references itemChosen / resultParagraph directly.
*/
const resultParagraph = document.querySelector('.js_result')
const itemChosen = document.querySelector('.js_items_chosen')

/*
    Score tracking object: { wins, loses, ties }.
    On page load we try to read a previously saved score from localStorage
    (so the tally survives a page refresh). If nothing is saved yet,
    JSON.parse(null) returns null, and the || fallback gives us a fresh
    object starting at 0-0-0.
*/
const recordGame = JSON.parse(localStorage.getItem('scores')) ||
{
    wins: 0,
    loses: 0,
    ties: 0
}

// Show the current score in the page as soon as the script loads
updateScore();

/*
    Randomly picks the computer's move.
    Math.random() returns a decimal between 0 (inclusive) and 1 (exclusive),
    so we split that range into thirds: rock, paper, scissors.
*/
function pickComputerMove(){
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber>0 && randomNumber<=1/3){
        computerMove = 'rock'
    }else if(randomNumber>1/3 && randomNumber<=2/3){
        computerMove = 'paper'
    }else{
        computerMove = 'scissors'
    }
    return computerMove
}

/*
    Main game function, triggered by clicking one of the move images.
    Takes the player's move as a string ('rock' | 'paper' | 'scissors'),
    gets a random move for the computer, works out who won, updates the
    score, saves it to localStorage, and updates the page text/images.
*/

document.addEventListener('keydown', (event) => {
    if (event.key === 'p'){
        playGame('paper');
    }else if (event.key === 'r'){
        playGame('rock')
    }else if (event.key === 's'){
        playGame('scissors')
    }
});



function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = ''

    // Classic rock-paper-scissors rules, checked from the player's move outward
    if (playerMove === 'scissors'){
        if (computerMove === 'rock'){
            result = 'you lose'
        }else if (computerMove === 'paper'){
            result = 'you win'
        }else if (computerMove === 'scissors'){
            result = 'Tie'
        }
    }else if (playerMove === 'paper'){
        if (computerMove === 'rock'){
            result = 'you win'
        }else if (computerMove === 'paper'){
            result = 'Tie'
        }else if (computerMove === 'scissors'){
            result = 'you lose'
        }
    }else if (playerMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'Tie'
        }else if (computerMove === 'paper'){
            result = 'you lose'
        }else if (computerMove === 'scissors'){
            result = 'you win'
        }
    }

    // Update the running tally based on the outcome
    if (result === 'you win'){
        recordGame.wins += 1
    }else if(result === 'you lose'){
        recordGame.loses += 1
    }else if(result === 'Tie'){
        recordGame.ties += 1
    }

    // Persist the updated score so it survives a page refresh
    localStorage.setItem(`scores`,JSON.stringify(recordGame));

    // Show the result text (e.g. "you win")
    resultParagraph.innerHTML = result;

    // Show both players' chosen emoji icons side by side
    itemChosen.innerHTML =
        `You picked
        <img src="icons/${playerMove}-emoji.png" class="icons_css_for_result">
        Computer picked 
        <img src="icons/${computerMove}-emoji.png" class="icons_css_for_result">`

    // Refresh the on-screen win/lose/tie counter
    updateScore();
}

/*
    Writes the current win/lose/tie counts from recordGame into the
    .js_save_scores paragraph on the page.
*/
function updateScore(){
    document.querySelector('.js_save_scores')
        .innerHTML =
        `wins = ${recordGame.wins} , loses = ${recordGame.loses}, ties = ${recordGame.ties}`
}

let isAutoPlaying = false;
let intervalId;
function autoplay(){
    if (!isAutoPlaying){
        //here I write another way of function for practicing purposes
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        
        isAutoPlaying = true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}
