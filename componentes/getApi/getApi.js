import { errorFetch } from "../helpers/errorMesages.js";
import { showLoading } from "../helpers/hideShowLoading.js";
import { deliveryResults } from "../deliverty-results/deliveryResults.js";
import { hideLoading } from "../helpers/hideShowLoading.js";

//Get api#
export const asyncFetch = async (value) => {
    showLoading();

    try {
        const res = await fetch(`https://swapi.dev/api/${value}`);
        return deliveryResults(res);
    } catch (error) {
        errorFetch();
        hideLoading();
    }
};
