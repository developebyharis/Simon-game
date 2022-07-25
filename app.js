let sequence = [];
let humanSequebce = [];

const startButton = document.querySelector(".js-start");
function startGame() {
    startButton.classList("hidden");
}
startButton.addEventListener("click", startGame);
const sartButton = document.querySelector(".js-start");
const info = document.querySelector(".js-info");
function startGame () {
    startButton.classList.add("hidden");
    info.classList.remove("hidden");
    info.textContent = "wait for the computer";
}
let level = 0;
function nextRound() {
    level+= 1;
    const nextSequence = [...sequence];
}
function nextStep() {
    const tiles = ["red", "green", "blue", "yellow"];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
    return random;
}

function nextRound(){
    level += 1;
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
}