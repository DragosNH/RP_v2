const castleBtn = document.querySelector(".castleBtn");
const forestBtn = document.querySelector(".forestBtn");
const caveBtn = document.querySelector(".caveBtn");
const areas = document.querySelector(".areas");

const scenes = {
    castle: {
        title: "The Haunted Castle",
        monsters: ["canibalBook", "possesedArmour", "movingPainting"]
    },
    forest: {
        title: "The Forbidden Forest",
        monsters: ["demonWolf", "killerThree", "corruptBolde"]
    },
    cave: {
        title: "The Forsaken Cave",
        monsters: ["evilBear", "quickmoss", "vampireBat"]
    }
}

const monsters = {
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
        name : "Moving Painting",
        maxHp: 30,
        spawnChance: 0.2
    },
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
        name : "Corrupt Bolder",
        maxHp: 20,
        spawnChance: 0.5
    },
    evilBear: {
        name: "Evil Bear",
        maxHp : 45,
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

    // --------- Title ---------
    const title = document.createElement("h2");
    title.innerText = titleText.title;
    title.classList.add("scene-title");

    areas.appendChild(container);
    container.appendChild(removeBtn);
    container.appendChild(title);

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
