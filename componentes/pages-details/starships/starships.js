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
        document.getElementById("model").innerText = data.model;
        document.getElementById("manufacturer").innerText = data.manufacturer;
        document.getElementById("cost_in_credits").innerText = data.cost_in_credits;
        document.getElementById("length").innerText = data.length;
        document.getElementById("max_atmosphering_speed").innerText =
            data.max_atmosphering_speed;
        document.getElementById("crew").innerText = data.crew;
        document.getElementById("passengers").innerText = data.passengers;
        document.getElementById("cargo_capacity").innerText = data.cargo_capacity;
        document.getElementById("consumables").innerText = data.consumables;
        document.getElementById("hyperdrive_rating").innerText = data.hyperdrive_rating;
        document.getElementById("MGLT").innerText = data.MGLT;
        document.getElementById("starship_class").innerText = data.starship_class;
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
