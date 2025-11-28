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
const characterCreation = () => {
    if (currentPlayers < maxPlayers) {
        // let characterCard = `<div class="newPlayer">
        //     <input type="text" name="charName" class="charName">
        //     <p class="hp">HP:<span class="hpValue">${hpVal}</span></p>
        //     <p class="mp">MP:<span class="mpValue">${manaVal}</span></p>
        //     <button class="removePlayer removeBtn">×</button>
        // </div>
        // `
        // playableCharacters.insertAdjacentHTML("beforeend", characterCard)
        // currentPlayers++;

        let newPlayer = document.createElement("div");
        newPlayer.classList.add("newPlayer");

        let nameInput = document.createElement("input");
        nameInput.classList.add("charName");
        nameInput.setAttribute("type", "text");

        newPlayer.appendChild(nameInput);

        playableCharacters.appendChild(newPlayer)

        currentPlayers++;

    } else {
        addCharacter.classList.add("active");
    }
    console.log("number of players: " + currentPlayers)
}


// Remove players from the board
playableCharacters.addEventListener("click", function (e) {
    if (e.target.classList.contains("removeBtn")) {
        e.target.closest(".newPlayer").remove();
        currentPlayers--;
        addCharacter.classList.remove("active");
        
    }
});
addCharacter.addEventListener("click", characterCreation);

console.log(currentPlayers)