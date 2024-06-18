


const player0El = document.querySelector('.player_0')
const player1El = document.querySelector('.player_1')

const score0El = document.getElementById('score_0')
const score1El = document.getElementById('score_1')
const diceEl = document.querySelector(".dice")

const current0El = document.getElementById('current_0')
const current1El = document.getElementById('current_1')

const btnRoll = document.querySelector('.roll-dice-btn')
const btnHold = document.querySelector('.hold-dice-btn')
const newGame = document.querySelector('.newGame')



let score, currentScore, activePlayer, playGame

const inti = function () {
    score0El.textContent = 0
    score1El.textContent = 0
    diceEl.classList.add("hidden")

    score = [0, 0]
    activePlayer = 0
    currentScore = 0
    playGame = true

    current0El.textContent = 0
    current1El.textContent = 0

    diceEl.classList.add('hidden')
    player0El.classList.remove("player_winner")
    player1El.classList.remove("player_winner")
    player0El.classList.add("player_active")
    player1El.classList.remove("player_active")
}
inti()

const switchPlayer = function () {
    document.getElementById(`current_${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0
    player0El.classList.toggle('player_active')
    player1El.classList.toggle('player_active')
}

btnRoll.addEventListener('click', function () {
    if (playGame) {
        diceEl.classList.remove('hidden')

        const dice = Math.floor(Math.random() * 6) + 1
        diceEl.src = `./assets/dice-${dice}.webp`

        if (dice !== 1) {
            currentScore += dice
            // current0El.textContent = currentScore
            document.getElementById(`current_${activePlayer}`).textContent = currentScore
        } else {
            switchPlayer()

        }
    }

})

btnHold.addEventListener('click', function () {

    if (playGame) {
        score[activePlayer] += currentScore
        document.getElementById(`score_${activePlayer}`).textContent = score[activePlayer]

        if (score[activePlayer] >= 20) {
            playGame = false
            document.querySelector(`.player_${activePlayer}`).classList.add('player_winner')
            document.querySelector(`.player_${activePlayer}`).classList.add("player_active")
            diceEl.classList.add("hidden")
        } else {
            switchPlayer()
        }
    }

})

//

newGame.addEventListener('click', inti)




// Counter Script

// const counter = document.querySelector("#counter")
// const decrease = document.querySelector("#decrease")
// const reset = document.querySelector("#reset")
// const increase = document.querySelector("#increase")

// counter.innerHTML = 0

// increase.addEventListener('click', increaseCount)
// decrease.addEventListener('click', decreaseCount)
// reset.addEventListener('click', resetCount)


// function increaseCount() {
//     counter.textContent++
// }


// function decreaseCount() {
//     if (counter.textContent == 1) {
//         alert("Counter is at 1")
//     } else {
//         counter.textContent--

//     }
// }
// function resetCount() {
//     if (counter.textContent == 0) {
//         alert("Counter is already 0")
//     } else {
//         counter.textContent = 0
//     }
// }