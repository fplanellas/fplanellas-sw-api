import { asyncFetch } from "../getApi/getApi.js";

//event listener for search
export const buttonsMain = () => {
    const containerButtons = document.getElementById("containerButtons");

    containerButtons.innerHTML += `<ul id="buttons" class="text-center">
          <li class="button-section"><button id="people" type="button">PEOPLE</button>
          </li>
          <li class="button-section"><button id="planets" type="button">PLANETS</button></li>
          <li class="button-section"><button id="species" type="button">FILMS</button></li>
          <li class="button-section"><button id="species" type="button">SPECIES</button></li>
          <li class="button-section"><button id="vehicles" type="button">VEHICLES</button></li>
          <li class="button-section"><button id="starships" type="button">STARSHIPS</button></li>
        </ul>`;

    document.querySelector("#buttons").addEventListener("click", ({ target }) => {
        const buttonsSelection = document.querySelectorAll(".button-section button");

        buttonsSelection.forEach((button) => {
            button.classList.remove("active");
        });

        target.classList.add("active");
        const getvalue = target.textContent.trim().toLowerCase();
        location.href = `../../index.html?value=${getvalue}`;
        return asyncFetch(getvalue);
    });
};
