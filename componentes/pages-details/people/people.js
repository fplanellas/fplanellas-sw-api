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
        document.getElementById("height").innerText = data.height;
        document.getElementById("mass").innerText = data.mass;
        document.getElementById("hair_color").innerText = data.hair_color;
        document.getElementById("skin_color").innerText = data.skin_color;
        document.getElementById("eye_color").innerText = data.eye_color;
        document.getElementById("birth_year").innerText = data.birth_year;
        document.getElementById("gender").innerText = data.gender;
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
