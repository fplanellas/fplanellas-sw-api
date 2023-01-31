import { asyncFetch } from "../getApi/getApi.js";
import { errorSearch } from "./errorMesages.js";

//event listener for search
export const searchListener = (value) => {
    const containerInput = document.getElementById("inputContainer");

    const showing = document.getElementById("show");
    const name = document.getElementById("name");
    if (showing) {
        showing.remove();
        name.remove();
    }

    containerInput.innerHTML += `<input type="text" name="search" id="name" placeholder="Search by name">
          <button id="show">search</button>`;

    document.getElementById("show").addEventListener("click", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const searchedUrl = `${value}/?search=${name}`;

        if (name.length <= 1) return errorSearch();

        return asyncFetch(searchedUrl);
    });
};
