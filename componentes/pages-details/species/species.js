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
        document.getElementById("classification").innerText = data.classification;
        document.getElementById("designation").innerText = data.designation;
        document.getElementById("average_height").innerText = data.average_height;
        document.getElementById("skin_colors").innerText = data.skin_colors;
        document.getElementById("hair_colors").innerText = data.hair_colors;
        document.getElementById("eye_colors").innerText = data.eye_colors;
        document.getElementById("average_lifespan").innerText = data.average_lifespan;
        document.getElementById("language").innerText = data.language;
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
