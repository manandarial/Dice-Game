let player1Score = 0
let player2Score = 0
let player1Turn = true
let winningScore = 20

const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const message = document.getElementById('message')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')
const inputNumber = document.querySelector('input')
const winningScoreDisplay = document.querySelector('h1 span')

function showResetBtn(){
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block'
}

rollBtn.addEventListener('click', function(){
    const randomNumber = Math.ceil(Math.random() * 6)
    console.log(randomNumber)
    
    if(player1Turn){
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        message.textContent = 'Player 2 Turn'
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
        message.textContent = 'Player 1 Turn'
    }
    if(player1Score >= winningScore){
        message.textContent = 'Player 1 WON 🎖'
        showResetBtn()
    }else if(player2Score >= winningScore){
        message.textContent = 'Player 2 WON 🎖'
        showResetBtn()
    }
    player1Turn = !player1Turn
})

resetBtn.addEventListener('click', function(){
    reset()
})

function reset(){
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    message.textContent = 'Player 1 Turn'
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    resetBtn.style.display = 'none'
    rollBtn.style.display = 'block'
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
}

inputNumber.addEventListener('change', function(){
    winningScoreDisplay.textContent = inputNumber.value
    winningScore = inputNumber.value
    inputNumber.textContent = inputNumber.value
    reset()
})