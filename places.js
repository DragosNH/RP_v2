const castleBtn = document.querySelector(".castleBtn");
const forestBtn = document.querySelector(".forestBtn");
const caveBtn = document.querySelector(".caveBtn");
const areas = document.querySelector(".areas");

let currentPlaces = 0;
const maxPlaces = 1;

const castleAdventure = () => {
    if(currentPlaces < maxPlaces){
        // --------- Container ---------
        const castleContainer = document.createElement("div");
        castleContainer.classList.add("area-container");
        
        // --------- Remove Button ---------
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.innerText = "Close";
        
        removeBtn.onclick = () => {
            castleContainer.remove();
            currentPlaces--;
        }

        // --------- Title ---------
        const title = document.createElement("h2");
        title.innerText = "The Haunted Castle"
        title.classList.add("scene-title");

        areas.appendChild(castleContainer);
        castleContainer.appendChild(removeBtn);
        castleContainer.appendChild(title);
        currentPlaces++;
    } else {
        castleBtn.classList.add("active");
    }
}

castleBtn.addEventListener("click", castleAdventure);