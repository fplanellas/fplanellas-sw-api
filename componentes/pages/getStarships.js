import { searchListener } from "../helpers/searchListener.js";
import { pagination } from "../helpers/pagination.js";
import { errorSearchNotFound } from "../helpers/errorMesages.js";

//get starships
export const getStarships = async (res, value) => {
    const results = document.getElementById("results");

    const dataRes = await res.json();
    const data = dataRes.results;

    if (data.length === 0) {
        errorSearchNotFound("starships");
    }

    let output = "";
    data.forEach((item) => {
        output += `
        <div class="card p-3 ">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
                <span><strong>Model: </strong>${item.model}</span>
                <span><strong>Starship class: </strong>${item.starship_class}</span>
                <span class="last-item"><strong>Length: </strong>${item.length}m</span>
                <button
                    class="btn btn-secondary"
                    onclick="location.href='./componentes/pages-details/starships/starships.html?url=${item.url}'">
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
