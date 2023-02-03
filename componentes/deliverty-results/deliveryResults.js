import { getStarships } from "../pages/getStarships.js";
import { getFilms } from "../pages/getFilms.js";
import { getPeople } from "../pages/getPeople.js";
import { getPlanets } from "../pages/getPlanets.js";
import { getSpecies } from "../pages/getSpecies.js";
import { getVehicles } from "../pages/getVehicles.js";
import { hideLoading } from "../helpers/hideShowLoading.js";

export const deliveryResults = (res) => {
    if (res.url.includes("people")) {
        hideLoading();
        return getPeople(res, "people");
    }
    if (res.url.includes("planets")) {
        hideLoading();
        return getPlanets(res, "planets");
    }
    if (res.url.includes("films")) {
        hideLoading();
        return getFilms(res, "films");
    }
    if (res.url.includes("species")) {
        hideLoading();
        return getSpecies(res, "species");
    }
    if (res.url.includes("vehicles")) {
        hideLoading();
        return getVehicles(res, "vehicles");
    }
    if (res.url.includes("starships")) {
        hideLoading();
        return getStarships(res, "starships");
    }
};
