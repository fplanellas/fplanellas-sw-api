import { searchListener } from "../helpers/searchListener.js";
import { pagination } from "../helpers/pagination.js";
import { errorSearchNotFound } from "../helpers/errorMesages.js";

//get films
export const getFilms = async (res, value) => {
    const results = document.getElementById("results");

    const dataRes = await res.json();
    const data = dataRes.results;

    if (data.length === 0) {
        errorSearchNotFound("films");
    }

    let output = "";
    data.forEach((item) => {
        output += `
        <div class="card p-3 ">
            <h4 class="card-title text-center">${item.title}</h4>
            <div class="card-content">
                <span><strong>Producer: </strong>${item.producer}</span>
                <span><strong>Director: </strong>${item.director}</span>
                <span class="last-item"><strong>Release Date: </strong>${item.release_date}</span>
                <button
                    class="btn btn-secondary"
                    onclick="location.href='./componentes/pages-details/films/films.html?url=${item.url}'">
                    See more
                </button>
            </div>
        </div>
        `;
    });
    results.innerHTML = output;

    searchListener(value);
    pagination(dataRes, value);
};
