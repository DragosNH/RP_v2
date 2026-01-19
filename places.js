const castleBtn = document.querySelector(".castleBtn");
const forestBtn = document.querySelector(".forestBtn");
const caveBtn = document.querySelector(".caveBtn");
const areas = document.querySelector(".areas");

let currentPlaces = 0;
const maxPlaces = 1;


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
    title.innerText = titleText;
    title.classList.add("scene-title");

    areas.appendChild(container);
    container.appendChild(removeBtn);
    container.appendChild(title);

    activeBtn.classList.add("active");
}



castleBtn.addEventListener("click", () => {
    createScene("The Haunted Castle", castleBtn);
});

forestBtn.addEventListener("click", () => {
    createScene("The Forbidden Forest", forestBtn);
});

caveBtn.addEventListener("click", () => {
    createScene("The Dark Cave", caveBtn);
});
