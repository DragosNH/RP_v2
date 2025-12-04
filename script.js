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

// Characters classes list
const characterClasses = ["Warrior", "Rogue", "Sorcerer", "Paladin", "Mange", "Necromancer"];

// Add players to the board
const characterCreation = () => {
    if (currentPlayers < maxPlayers) {

        // ------ Player div container ------
        let newPlayer = document.createElement("div");
        newPlayer.classList.add("newPlayer");

        // ------ Name input ------
        let nameInput = document.createElement("input");
        nameInput.classList.add("charName");
        nameInput.setAttribute("type", "text");
        nameInput.placeholder = "Character's name";
        nameInput.maxLength = 15;

        // ------ Name Input function ------
        nameInput.addEventListener("keydown", e => {
            if (e.key === 'Enter') {
                let chosenName = document.createElement("h3");
                chosenName.innerText = nameInput.value;
                nameInput.replaceWith(chosenName)
            }
        });



        // ------ Health Points and Mana Points ------
        // --- Health points ---
        let playerHp = document.createElement("p");
        playerHp.classList.add("hp");
        playerHp.innerText = "HP: "
        let playerHpValue = document.createElement("strong");
        playerHpValue.classList.add('hpValue');
        playerHpValue.innerText = hpVal;
        // --- Mana points ---
        let playerMp = document.createElement("p");
        playerMp.classList.add("mp");
        playerMp.innerText = "MP: "
        let playerMpValue = document.createElement("strong");
        playerMpValue.classList.add("mpValue");
        playerMpValue.innerText = manaVal;

        // ------ Remove Button ------
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("removePlayer");
        removeBtn.classList.add("removeBtn");
        removeBtn.innerText = "Close";

        // ------ Remove button function ------
        removeBtn.addEventListener("click", () => {
            newPlayer.remove();
            currentPlayers--;
            if (currentPlayers <= 6) {
                addCharacter.classList.remove("active");
            }
        })


        // Characters classes
        let classesForm = document.createElement("form");
        let classSelect = document.createElement("select");
        
        characterClasses.forEach(className => {
            let option = document.createElement("option");
            option.text = className;
            classSelect.appendChild(option);
        })


        newPlayer.appendChild(nameInput);
        // Characters Classes form
        newPlayer.appendChild(classesForm);
        classesForm.appendChild(classSelect);

        newPlayer.appendChild(playerHp);
        playerHp.appendChild(playerHpValue);
        newPlayer.appendChild(playerMp);
        playerMp.appendChild(playerMpValue);
        newPlayer.appendChild(removeBtn);


        playableCharacters.appendChild(newPlayer)

        currentPlayers++;

    } else {
        addCharacter.classList.add("active");
    }
    console.log("number of players: " + currentPlayers);

}

// ------ Add new players maximum 6 ------
addCharacter.addEventListener("click", characterCreation);
