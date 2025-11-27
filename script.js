// Add a new character character button
const addCharacter = document.querySelector(".addCharacter");
const playableCharacters = document.querySelector(".playableCharacters")

// Select the desired area
const towerArea = document.querySelector(".towerBtn");
const forestArea = document.querySelector(".forestBtn");
const caveArea = document.querySelector(".caveBtn");

let currentPlayers = 0;
let maxPlayers = 6;

// Add players to the board
addCharacter.onclick = function () {
    if(currentPlayers < maxPlayers){
        let characterCard = `<h2>Player ${currentPlayers}</h2>`
        playableCharacters.insertAdjacentHTML("beforeend", characterCard)
        currentPlayers++;
    }
}