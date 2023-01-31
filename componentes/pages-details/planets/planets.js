import { showLoading, hideLoading } from "../../helpers/hideShowLoading.js";
import { errorFetch2 } from "../../helpers/errorMesages.js";

const getUrl = new URLSearchParams(window.location.search);
const url = getUrl.get("url");

showLoading();

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        hideLoading();
        document.getElementById("name").innerText = data.name;
        document.getElementById("rotation_period").innerText = data.rotation_period;
        document.getElementById("orbital_period").innerText = data.orbital_period;
        document.getElementById("diameter").innerText = data.diameter;
        document.getElementById("climate").innerText = data.climate;
        document.getElementById("gravity").innerText = data.gravity;
        document.getElementById("terrain").innerText = data.terrain;
        document.getElementById("surface_water").innerText = data.surface_water;
        document.getElementById("population").innerText = data.population;
        document.getElementById("created").innerText = data.created;
        document.getElementById("edited").innerText = data.edited;
    })
    .catch((error) => {
        console.error(error);
        errorFetch2();
        hideLoading();
        const containerResults = document.getElementById("result-list");
        containerResults.classList.remove("show-results");
    });
