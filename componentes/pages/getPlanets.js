import { searchListener } from "../helpers/searchListener.js";
import { pagination } from "../helpers/pagination.js";
import { errorSearchNotFound } from "../helpers/errorMesages.js";

//get planets
export const getPlanets = async (res, value) => {
    const results = document.getElementById("results");

    const dataRes = await res.json();
    const data = dataRes.results;

    if (data.length === 0) {
        errorSearchNotFound("planets");
    }

    let output = "";
    data.forEach((item) => {
        output += `
        <div class="card p-3">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
                <span><strong>Rotation period: </strong>${item.rotation_period}h</span>
                <span><strong>Orbital period: </strong>${item.orbital_period}d</span>
                <span class="last-item"><strong>Terrain: </strong>${item.terrain}</span>
                <button
                    class="btn btn-secondary"
                    onclick="location.href='./componentes/pages-details/planets/planets.html?url=${item.url}'">
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
