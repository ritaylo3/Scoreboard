let homeScore = 0
let guestScore = 0

let homeElement = document.getElementById("score1")
let guestElement = document.getElementById("score2")

function homeAdd1() {
    homeScore += 1
   homeElement.textContent = homeScore
}

function homeAdd2() {
    homeScore += 2
   homeElement.textContent = homeScore
}

function homeAdd3() {
    homeScore += 3
   homeElement.textContent = homeScore
}

function homeSubtract1() {
    homeScore -= 1
   homeElement.textContent = homeScore
}

function homeSubtract2() {
    homeScore -= 2
   homeElement.textContent = homeScore
}

function homeSubtract3() {
    homeScore -= 3
   homeElement.textContent = homeScore
}



function guestAdd1() {
    guestScore += 1
   guestElement.textContent = guestScore
}

function guestAdd2() {
    guestScore += 2
   guestElement.textContent = guestScore
}

function guestAdd3() {
    guestScore += 3
   guestElement.textContent = guestScore
}

function guestSubtract1() {
    guestScore -= 1
   guestElement.textContent = guestScore
}

function guestSubtract2() {
    guestScore -= 2
   guestElement.textContent = guestScore
}

function guestSubtract3() {
    guestScore -= 3
   guestElement.textContent = guestScore
}

function newGame() {
   homeScore = 0
   guestScore = 0
   homeElement.textContent = "00"
   guestElement.textContent = "00"
}