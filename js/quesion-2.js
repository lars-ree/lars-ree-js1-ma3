const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const container = document.querySelector(".games");

async function games() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const facts = results.results;

        container.innerHTML = "";

        for (let i =0; i < facts.length; i++) {
            if (i === 8) {
                break;
            }

            container.innerHTML += `<div class="game"><h4>${facts[i].name}</h4><p>Rating: ${facts[i].rating}</p><p>Tags:${facts[i].tags.length}</p></div>`;
        }
    } catch (error) {
        console.log("An has error occurred");
        container.innerHTML = displayError("Unable to call API");
    }
}

games();