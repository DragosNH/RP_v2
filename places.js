const castleBtn = document.querySelector(".castleBtn");
const forestBtn = document.querySelector(".forestBtn");
const caveBtn = document.querySelector(".caveBtn");
const areas = document.querySelector(".areas");

const scenes = {
    castle: {
        title: "The Haunted Castle",
        places: [
            {
                name: "Library",
                monsters: ["canibalBook"],
                objects: ["book"]
            },
            {
                name: "Armour room",
                monsters: ["possesedArmour"],
                objects: ["armour"]
            },
            {
                name: "Study room",
                monsters: ["movingPainting"],
                objects: ["painting"]
            }
        ]
    },

    forest: {
        title: "The Forbidden Forest",
        places: [
            {
                name: "River",
                monsters: ["demonWolf"],
                objects: ["shadow"]
            },
            {
                name: "The passage",
                monsters: ["killerThree"],
                objects: ["three"]
            },
            {
                name: "The bridge",
                monsters: ["corruptBolder"],
                objects: ["bolder"]
            }
        ]
    },

    cave: {
        title: "The Forsaken Cave",
        places: [
            {
                name: "The passage",
                monsters: ["evilBear"],
                objects: ["wallPainting"]
            },
            {
                name: "The waterfall",
                monsters: ["quickmoss"],
                objects: ["moss"]
            },
            {
                name: "The dark corner",
                monsters: ["vampireBat"],
                objects: ["bat"]
            }
        ]
    }
};


const monsters = {
    // --- The castle ---
    canibalBook: {
        name: "Canibal Book",
        maxHp: 20,
        spawnChance: 0.5
    },
    possesedArmour: {
        name: "Possesed Armour",
        maxHp: 45,
        spawnChance: 0.5
    },
    movingPainting: {
        name: "Moving Painting",
        maxHp: 30,
        spawnChance: 0.2
    },
    // --- The forest ---
    demonWolf: {
        name: "Demon Wolf",
        maxHp: 45,
        spawnChance: 0.5
    },
    killerThree: {
        name: "Killer Three",
        maxHp: 30,
        spawnChance: 0.5
    },
    corruptBolder: {
        name: "Corrupt Bolder",
        maxHp: 20,
        spawnChance: 0.5
    },
    // --- The cave ---
    evilBear: {
        name: "Evil Bear",
        maxHp: 45,
        spawnChance: 0.5,
    },
    quickmoss: {
        name: "Quickmoss",
        maxHp: 20,
        spawnChance: 0.5
    },
    vampireBat: {
        name: "Vampire Bat",
        maxHp: 30,
        spawnChance: 0.5
    }
}

const objects = {
    // --- The castle ---
    book: {
        name: "Book",
        spawnChance: 0.5
    },
    armour: {
        name: "Armour",
        spawnChance: 0.5
    },
    painting: {
        name: "Painting",
        spawnChance: 0.8
    },
    // --- The forest ---
    shadow: {
        name: "Random Shadow",
        spawnChance: 0.5
    },
    three: {
        name: "Three",
        spawnChance: 0.5
    },
    bolder: {
        name: "Bolder",
        spawnChance: 0.5
    },
    // --- The cave ---
    wallPainting: {
        name: "Wall painting",
        spawnChance: 0.5,
    },
    moss: {
        name: "Moss",
        maxHp: 20,
        spawnChance: 0.5
    },
    bat: {
        name: "Bat",
        spawnChance: 0.5
    }
}

const encounterTable = {
    low: [
        { type: "monsters", count: [3, 4], weight: 60 },
        { type: "monsters", count: [2, 3], weight: 25 },
        { type: "monsters", count: [1], weight: 10 },
        { type: "object", weight: 5 },
    ],
    midLow: [
        { type: "monsters", count: [2, 3], weight: 50 },
        { type: "monsters", count: [1, 2], weight: 30 },
        { type: "object", weight: 20 },
    ],
    midHigh: [
        { type: "monsters", count: [1, 2], weight: 50 },
        { type: "monsters", count: [1], weight: 30 },
        { type: "object", weight: 20 }
    ],
    high: [
        { type: "object", weight: 60 },
        { type: "monsters", count: [1], weight: 25 },
        { type: "monsters", count: [2], weight: 15 },
    ]
};

function weightedPick(options) {
    const total = options.reduce((sum, o) => sum + o.weight, 0);
    let roll = Math.random() * total;

    for (const option of options) {
        roll -= option.weight;
        if (roll <= 0) return option;
    }
}

function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function clearCurrentScene() {
    const existingScene = document.querySelector(".area-container");
    if (existingScene) {
        existingScene.remove();
    }

    castleBtn.classList.remove("active");
    forestBtn.classList.remove("active");
    caveBtn.classList.remove("active");
}

function resolveEncounter(rangeKey, roomData) {
    const outcome = weightedPick(encounterTable[rangeKey]);

    if (outcome.type === "object") {
        const objectId = randomFrom(roomData.objects);
        return {
            type: "object",
            name: objects[objectId].name
        };
    }

    const count = randomFrom(outcome.count);
    const monsterId = randomFrom(roomData.monsters);
    const monster = monsters[monsterId];

    return {
        type: "monsters",
        name: monster.name,
        count: count,
        maxHp: monster.maxHp
    };
}



function createScene(titleText, activeBtn) {
    clearCurrentScene();

    // --------- Container ---------
    const container = document.createElement("div");
    container.classList.add("area-container");

    // --------- Remove Button ---------
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.innerText = "Close";

    removeBtn.onclick = () => {
        container.remove();
        activeBtn.classList.remove("active");
    };

    const firstSpace = document.createElement("div");
    firstSpace.classList.add("firstSpace");

    // --------- Scene buttons ---------
    const sceneBtnsContainer = document.createElement("div");
    sceneBtnsContainer.classList.add("sceneBtnsContainer");

    const sceneButton1 = document.createElement("button");
    sceneButton1.innerText = titleText.places[0].name;
    sceneButton1.classList.add("btn");
    sceneButton1.classList.add("sceneBtn");

    const sceneButton2 = document.createElement("button");
    sceneButton2.innerText = titleText.places[1].name;
    sceneButton2.classList.add("btn");
    sceneButton2.classList.add("sceneBtn");

    const sceneButton3 = document.createElement("button");
    sceneButton3.innerText = titleText.places[2].name;
    sceneButton3.classList.add("btn")
    sceneButton3.classList.add("sceneBtn")

    // ------ Rooms container ------
    function summonScene(index) {
        const roomData = titleText.places[index];

        // --- Dice roll ---
        let roomContainer = document.createElement("div");
        roomContainer.classList.add("roomContainer");

        let roomTitle = document.createElement("h4");
        roomTitle.innerText = titleText.places[index].name;

        let rollsValues = document.createElement("div");

        let rollDice1to5 = document.createElement("button")
        rollDice1to5.innerText = "1 - 5";
        rollDice1to5.classList.add("rollBtn");

        let rollDice6to10 = document.createElement("button");
        rollDice6to10.innerText = "6 - 10";
        rollDice6to10.classList.add("rollBtn");

        let rollDice11to15 = document.createElement("button");
        rollDice11to15.innerText = "11 - 15";
        rollDice11to15.classList.add("rollBtn");

        let rollDice16to20 = document.createElement("button");
        rollDice16to20.innerText = "16 - 20";
        rollDice16to20.classList.add("rollBtn");

        const monsterOrObjectContainer = document.createElement("div");
        monsterOrObjectContainer.classList.add("monsterOrObjectContainer");

        function handleRoll(rangeKey) {
            monsterOrObjectContainer.innerHTML = "";

            const encounter = resolveEncounter(rangeKey, roomData);

            const p = document.createElement("p");

            if (encounter.type === "object") {
                p.innerText = `You found: ${encounter.name}`;
            } else {
                p.innerText = `${encounter.name} x ${encounter.count} (HP: ${encounter.maxHp})`;
            }

            monsterOrObjectContainer.appendChild(p);
        }

        rollDice1to5.addEventListener("click", () => handleRoll("low"));
        rollDice6to10.addEventListener("click", () => handleRoll("midLow"));
        rollDice11to15.addEventListener("click", () => handleRoll("midHigh"));
        rollDice16to20.addEventListener("click", () => handleRoll("high"));

        container.appendChild(roomContainer);
        roomContainer.appendChild(roomTitle);
        roomContainer.appendChild(rollsValues);
        roomContainer.appendChild(monsterOrObjectContainer);

        rollsValues.appendChild(rollDice1to5);
        rollsValues.appendChild(rollDice6to10);
        rollsValues.appendChild(rollDice11to15);
        rollsValues.appendChild(rollDice16to20);
    }



    // ------ Buttons one two and three event listeners ------
    sceneButton1.addEventListener("click", () => summonScene(0), { once: true });
    sceneButton2.addEventListener("click", () => summonScene(1), { once: true });
    sceneButton3.addEventListener("click", () => summonScene(2), { once: true });


    // --------- Title ---------
    const title = document.createElement("h2");
    title.innerText = titleText.title;
    title.classList.add("scene-title");

    areas.appendChild(container);
    container.appendChild(removeBtn);
    container.appendChild(title);
    container.appendChild(firstSpace);

    container.appendChild(sceneBtnsContainer);
    sceneBtnsContainer.appendChild(sceneButton1);
    sceneBtnsContainer.appendChild(sceneButton2);
    sceneBtnsContainer.appendChild(sceneButton3);

    // firstSpace.appendChild(firstMonsterTitle)
    // firstSpace.appendChild(secondMonsterTitle)
    // firstSpace.appendChild(thirdMonsterTitle)

    activeBtn.classList.add("active");
}



castleBtn.addEventListener("click", () => {
    createScene(scenes.castle, castleBtn);
});

forestBtn.addEventListener("click", () => {
    createScene(scenes.forest, forestBtn);
});

caveBtn.addEventListener("click", () => {
    createScene(scenes.cave, caveBtn);
});
