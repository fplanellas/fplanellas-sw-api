import { showLoading, hideLoading } from "../../helpers/hideShowLoading.js";
import { errorFetch2 } from "../../helpers/errorMesages.js";

showLoading();

const getUrl = new URLSearchParams(window.location.search);
const url = getUrl.get("url");

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        hideLoading();
        //data.replace("\r\n", "");
        document.getElementById("title").innerText = data.title;
        document.getElementById("director").innerText = data.director;
        document.getElementById("producer").innerText = data.producer;
        document.getElementById("release_date").innerText = data.release_date;

        document.getElementById("opening_crawl").innerText = data.opening_crawl
            .replaceAll("\r\n", " ")
            .replaceAll(". ", ".\r\n\r\n");
        document.getElementById("created").innerText = data.created;
        document.getElementById("edited").innerText = data.edited;
    })
    .catch((error) => {
        console.log(error);
        errorFetch2();
        hideLoading();
        const containerResults = document.getElementById("result-list");
        containerResults.classList.remove("show-results");
    });
