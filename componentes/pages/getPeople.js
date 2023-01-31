import { searchListener } from "../helpers/searchListener.js";
import { pagination } from "../helpers/pagination.js";
import { errorSearchNotFound } from "../helpers/errorMesages.js";

//get people
export const getPeople = async (res, value) => {
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
                <span><strong>Height: </strong>${item.height}</span>
                <span><strong>Gender: </strong>${item.gender}</span>
                <span class="last-item"><strong>Release Date: </strong>${
                    item.birth_year
                }</span>
                ${console.log(item.url)}
                <button
                    class="btn btn-secondary"
                    onclick="location.href='./componentes/pages-details/people/people.html?url=${
                        item.url
                    }'">
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
