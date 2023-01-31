import { searchListener } from "../helpers/searchListener.js";
import { pagination } from "../helpers/pagination.js";
import { errorSearchNotFound } from "../helpers/errorMesages.js";

//get species
export const getSpecies = async (res, value) => {
    const results = document.getElementById("results");

    const dataRes = await res.json();
    const data = dataRes.results;

    if (data.length === 0) {
        errorSearchNotFound("species");
    }

    let output = "";
    data.forEach((item) => {
        output += `
        <div class="card p-3 ">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
                <span><strong>Classification: </strong>${item.classification}</span>
                <span><strong>Average height: </strong>${item.average_height}</span>
                <span class="last-item"><strong>Language: </strong>${item.language}</span>
                <button
                    class="btn btn-secondary"
                    onclick="location.href='./componentes/pages-details/species/species.html?url=${item.url}'">
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
