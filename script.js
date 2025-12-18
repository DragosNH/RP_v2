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
const characterClasses = ["Warrior", "Rogue", "Sorcerer", "Paladin", "Mage", "Necromancer"];

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
        // --- Health container ---
        let healthContainer = document.createElement("div");
        healthContainer.classList.add("health-container");
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

        // --------- Class select options ------
        let formStyle = document.createElement("div");
        formStyle.classList.add("formStyle");

        // Characters classes
        let classesForm = document.createElement("form");
        let classSelect = document.createElement("select");
        classSelect.classList.add("optionsDropdown");

        characterClasses.forEach(className => {
            let option = document.createElement("option");
            option.text = className;
            classSelect.appendChild(option);
        })

        let selectClassBtn = document.createElement("button");
        selectClassBtn.classList.add("btnSend");
        selectClassBtn.innerHTML = "Select";

        let selectedClassHeading = document.createElement("h4");

        selectClassBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const selectedClass = classSelect.value;
            selectedClassHeading.textContent = selectedClass;

            // --- Classes ultimate attacks ---

            if (selectedClass === characterClasses[0]) {
                firstUltimateAttack.textContent = "Meteor smash";
                secondUltimateAttack.textContent = "Divine slash";
            } else if (selectedClass === characterClasses[1]) {
                firstUltimateAttack.textContent = "Invisibility";
                secondUltimateAttack.textContent = "Back stab";
            } else if (selectedClass === characterClasses[2]){
                firstUltimateAttack.textContent = "Teleportation";
                secondUltimateAttack.textContent = "Arcane prison";
            } else if (selectedClass === characterClasses[3]){
                firstUltimateAttack.textContent = "Divine shield";
                secondUltimateAttack.textContent = "Celestial hammer";
            }

            classSelect.remove();
            selectClassBtn.remove();
            formStyle.remove();
        });

        // --------- Damage taken points ---------
        // --- Minimum Damage ---
        let minDamageBtn = document.createElement("button");
        minDamageBtn.classList.add("btnSend");
        minDamageBtn.innerText = "Min";

        function updateDamagedHp() {
            playerHpValue.textContent = hpVal;
        }

        minDamageBtn.onclick = () => {
            const damage = Math.floor(Math.random() * 5) + 1;
            hpVal -= damage;

            if (hpVal < 0) hpVal = 0;

            updateDamagedHp();
            console.log("HP:", hpVal);
        }

        // --- Normal Damage ---
        let normalDamageBtn = document.createElement("button");
        normalDamageBtn.classList.add("btnSend");
        normalDamageBtn.innerText = "Normal";

        normalDamageBtn.onclick = () => {
            const damage = Math.floor(Math.random() * 15) + 5;
            hpVal -= damage;

            if (hpVal < 0) hpVal = 0;

            updateDamagedHp();
            console.log("HP:", hpVal);
        }

        // --- Critical Damage ---
        let criticalDamageBtn = document.createElement("button");
        criticalDamageBtn.classList.add("btnSend");
        criticalDamageBtn.innerText = "Crit";

        criticalDamageBtn.onclick = () => {
            const damage = Math.floor(Math.random() * 25) + 15;
            hpVal -= damage;

            if (hpVal < 0) hpVal = 0;

            updateDamagedHp();
            console.log("HP:", hpVal);
        }


        // --------- Ultimate attacks ---------
        let ultimateAttContainer = document.createElement("div");
        ultimateAttContainer.classList.add("attacks-container");

        let attacksTitle = document.createElement("h4");
        attacksTitle.innerText = "Ultimate attacks";

        let firstUltimateAttack = document.createElement("p");
        firstUltimateAttack.innerText = "-";

        let secondUltimateAttack = document.createElement("p");
        secondUltimateAttack.innerText = "-";




        // --------- Appended elements ---------
        newPlayer.appendChild(nameInput);
        // Characters Classes form
        newPlayer.appendChild(classesForm);
        classesForm.appendChild(formStyle);
        formStyle.appendChild(classSelect);
        formStyle.appendChild(selectClassBtn);
        classesForm.appendChild(selectedClassHeading);
        // New player
        newPlayer.appendChild(healthContainer);
        healthContainer.appendChild(playerHp);
        healthContainer.appendChild(minDamageBtn);
        healthContainer.appendChild(normalDamageBtn);
        healthContainer.appendChild(criticalDamageBtn);
        // Player HP
        playerHp.appendChild(playerHpValue);
        // Player MP
        newPlayer.appendChild(playerMp);
        playerMp.appendChild(playerMpValue);

        // Ultimate attacks
        newPlayer.appendChild(ultimateAttContainer);
        ultimateAttContainer.appendChild(attacksTitle);
        ultimateAttContainer.appendChild(firstUltimateAttack);
        ultimateAttContainer.appendChild(secondUltimateAttack);

        // Close button
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
