const castleBtn = document.querySelector(".castleBtn");
const forestBtn = document.querySelector(".forestBtn");
const caveBtn = document.querySelector(".caveBtn");
const areas = document.querySelector(".areas");

const scenes = {
    castle: {
        title: "The Haunted Castle",
        monsters: ["canibalBook", "possesedArmour", "movingPainting"],
        places: ["Library", "Armour room", "Study room"]
    },
    forest: {
        title: "The Forbidden Forest",
        monsters: ["demonWolf", "killerThree", "corruptBolder"],
        places: ["River", "The passage", "The bridge"]
    },
    cave: {
        title: "The Forsaken Cave",
        monsters: ["evilBear", "quickmoss", "vampireBat"],
        places: ["The passage", "The waterfall", "The dark corner"]
    }
}

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


function clearCurrentScene() {
    const existingScene = document.querySelector(".area-container");
    if (existingScene) {
        existingScene.remove();
    }

    castleBtn.classList.remove("active");
    forestBtn.classList.remove("active");
    caveBtn.classList.remove("active");
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
    sceneButton1.innerText = titleText.places[0];
    sceneButton1.classList.add("btn");
    sceneButton1.classList.add("sceneBtn");

    const sceneButton2 = document.createElement("button");
    sceneButton2.innerText = titleText.places[1];
    sceneButton2.classList.add("btn");
    sceneButton2.classList.add("sceneBtn");

    const sceneButton3 = document.createElement("button");
    sceneButton3.innerText = titleText.places[2];
    sceneButton3.classList.add("btn")
    sceneButton3.classList.add("sceneBtn")

    function summonScene(index) {
        let roomContainer = document.createElement("div");
        roomContainer.classList.add("roomContainer");

        let roomTitle = document.createElement("h4");
        // I would like to be able to get the respective place by pressing the coresponding button
        roomTitle.innerText = titleText.places[index];

        container.appendChild(roomContainer);
        roomContainer.appendChild(roomTitle);
    }

    // ------ Buttons one two and three event listeners ------
    sceneButton1.addEventListener("click", () => summonScene(0), { once: true });
    sceneButton2.addEventListener("click", () => summonScene(1), { once: true });
    sceneButton3.addEventListener("click", () => summonScene(2), { once: true });


    // ------ Monsters call ------
    let firstMonsterId = titleText.monsters[0];
    let firstMonster = monsters[firstMonsterId];

    let secondMonsterId = titleText.monsters[1];
    let secondMonster = monsters[secondMonsterId];

    let thirdMonsterId = titleText.monsters[2];
    let thirdMonster = monsters[thirdMonsterId];

    let firstMonsterTitle = document.createElement("h3");
    firstMonsterTitle.innerText = firstMonster.name;

    let secondMonsterTitle = document.createElement("h3");
    secondMonsterTitle.innerText = secondMonster.name;

    let thirdMonsterTitle = document.createElement("h3");
    thirdMonsterTitle.innerText = thirdMonster.name;

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
