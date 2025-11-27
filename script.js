// Add a new character character button
const addCharacter = document.querySelector(".addCharacter");
const playableCharacters = document.querySelector(".playableCharacters")

// Select the desired area
const towerArea = document.querySelector(".towerBtn");
const forestArea = document.querySelector(".forestBtn");
const caveArea = document.querySelector(".caveBtn");

// The number of players
let currentPlayers = 0;
let maxPlayers = 6;

// Created elements declared variables
let hpVal = 100;
let manaVal = 100;

// Add players to the board
addCharacter.onclick = function () {
    if (currentPlayers < maxPlayers) {
        let characterCard = `<div class="newPlayer">
            <input type="text" class="charName">
            <p class="hp">HP:<span class="hpValue">${hpVal}</span></p>
            <p class="mp">MP:<span class="mpValue">${manaVal}</span></p>
            <button class="removePlayer removeBtn">×</button>
        </div>
        `
        playableCharacters.insertAdjacentHTML("beforeend", characterCard)
        currentPlayers++;
    }else{
        addCharacter.classList.add("active");
    }
}

// Remove players from the board
playableCharacters.addEventListener("click", function (e) {
    if (e.target.classList.contains("removeBtn")) {
        e.target.closest(".newPlayer").remove();
        currentPlayers--;
        addCharacter.classList.remove("active");

    }
});
