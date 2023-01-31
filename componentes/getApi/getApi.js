import { errorFetch } from "../helpers/errorMesages.js";
import { showLoading } from "../helpers/hideShowLoading.js";
import { displayResults } from "../../index.js";
import { hideLoading } from "../helpers/hideShowLoading.js";

//Get api#
export const asyncFetch = async (value) => {
    showLoading();
    try {
        const res = await fetch(`https://swapi.dev/api/${value}`);

        return displayResults(res);
    } catch (error) {
        errorFetch();
        hideLoading();
    }
};
