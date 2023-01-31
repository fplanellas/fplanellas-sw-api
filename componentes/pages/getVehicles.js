import { searchListener } from "../helpers/searchListener.js";
import { pagination } from "../helpers/pagination.js";
import { errorSearchNotFound } from "../helpers/errorMesages.js";

//get vehicles
export const getVehicles = async (res, value) => {
    const results = document.getElementById("results");

    const dataRes = await res.json();
    const data = dataRes.results;

    if (data.length === 0) {
        errorSearchNotFound("people");
    }

    let output = "";
    data.forEach((item) => {
        output += `
        <div class="card p-3 ">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
                <span><strong>Model: </strong>${item.model}</span>
                <span><strong>Manufacturer: </strong>${item.manufacturer}</span>
                <span class="last-item"><strong>Vehicle class: </strong>${item.vehicle_class}</span>
                <button
                    class="btn btn-secondary"
                    onclick="location.href='./componentes/pages-details/vehicles/vehicles.html?url=${item.url}'">
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
