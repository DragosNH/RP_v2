const castleBtn = document.querySelector(".castleBtn");
const forestBtn = document.querySelector(".forestBtn");
const caveBtn = document.querySelector(".caveBtn");
const areas = document.querySelector(".areas");

let currentPlaces = 0;
const maxPlaces = 1;

const castleAdventure = () => {
    if(currentPlaces < maxPlaces){
        const castleContainer = document.createElement("div");
        castleContainer.classList.add("area-container");
    
        areas.appendChild(castleContainer);
        currentPlaces++;

    } else {
        castleBtn.classList.add("active");
    }
}

castleBtn.addEventListener("click", castleAdventure);