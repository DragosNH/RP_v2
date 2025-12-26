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



// Characters classes list
const characterClasses = ["Warrior", "Rogue", "Sorcerer", "Paladin", "Mage", "Necromancer", "Priest"];

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
        let baseHp = 100;
        let maxHp = baseHp;
        let currentHp = baseHp;
        let playerHp = document.createElement("p");
        playerHp.classList.add("hp");
        playerHp.innerText = "HP: "
        let playerHpValue = document.createElement("strong");
        playerHpValue.classList.add('hpValue');
        playerHpValue.innerText = currentHp;


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

            if (selectedClass === "Warrior") {
                firstUltimateAttack.textContent = "Meteor smash";
                secondUltimateAttack.textContent = "Divine slash";
                maxHp = baseHp + 50;
                currentHp = maxHp;
                playerHpValue.textContent = currentHp;

            } else if (selectedClass === "Rogue") {
                firstUltimateAttack.textContent = "Invisibility";
                secondUltimateAttack.textContent = "Back stab";
                maxHp = baseHp + 20;
                currentHp = maxHp;
                playerHpValue.textContent = currentHp;

            } else if (selectedClass === "Sorcerer") {
                firstUltimateAttack.textContent = "Arcane blast";
                secondUltimateAttack.textContent = "Arcane prison";

            } else if (selectedClass === "Paladin") {
                firstUltimateAttack.textContent = "Divine shield";
                secondUltimateAttack.textContent = "Celestial hammer";
                maxHp = baseHp + 50;
                currentHp = maxHp;
                playerHpValue.textContent = currentHp;

            } else if (selectedClass === "Mage") {
                firstUltimateAttack.textContent = "Great fire explosion";
                secondUltimateAttack.textContent = "Ice prison";

            } else if (selectedClass === "Necromancer") {
                firstUltimateAttack.textContent = "Reanimate dead body";
                secondUltimateAttack.textContent = "Living dead army summon";
                maxHp = baseHp + 20;
                currentHp = maxHp;
                playerHpValue.textContent = currentHp;

            } else if (selectedClass === "Priest") {
                firstUltimateAttack.textContent = "Teleportation";
                secondUltimateAttack.textContent = "Resurrect";
                maxHp = baseHp + 100;
                currentHp = maxHp;
                playerHpValue.textContent = currentHp;

            }

            classSelect.remove();
            selectClassBtn.remove();
            formStyle.remove();
        });

        const selectedClass = classSelect.value;


        // --------- Damage taken points ---------
        // --- Minimum Damage ---
        let minDamageBtn = document.createElement("button");
        minDamageBtn.classList.add("btnSend");
        minDamageBtn.innerText = "Min";

        function updateDamagedHp() {
            playerHpValue.textContent = currentHp;
        }

        minDamageBtn.onclick = () => {
            const damage = Math.floor(Math.random() * 5) + 1;
            currentHp = Math.max(0, currentHp - damage);
            updateDamagedHp();
        };


        // --- Normal Damage ---
        let normalDamageBtn = document.createElement("button");
        normalDamageBtn.classList.add("btnSend");
        normalDamageBtn.innerText = "Normal";

        normalDamageBtn.onclick = () => {
            const damage = Math.floor(Math.random() * 15) + 5;
            currentHp = Math.max(0, currentHp - damage);
            updateDamagedHp();

            if (currentHp < 0) currentHp = 0;

            updateDamagedHp();
            console.log("HP:", currentHp);
        }

        // --- Critical Damage ---
        let criticalDamageBtn = document.createElement("button");
        criticalDamageBtn.classList.add("btnSend");
        criticalDamageBtn.innerText = "Crit";

        criticalDamageBtn.onclick = () => {
            const damage = Math.floor(Math.random() * 25) + 15;
            currentHp = Math.max(0, currentHp - damage);
            updateDamagedHp();

            if (currentHp < 0) currentHp = 0;

            updateDamagedHp();
            console.log("HP:", currentHp);
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

        // Ultimate attacks functions
        let ultimateAttkOneCount = 0;
        let ultimateAttkTwoCount = 0;

        const useFirstUltimate = () => {
            ultimateAttkOneCount++;
            if (ultimateAttkOneCount == 3){
                firstUltimateAttack.style.textDecoration = "line-through";
            }
        };

        firstUltimateAttack.addEventListener("click", useFirstUltimate);


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
