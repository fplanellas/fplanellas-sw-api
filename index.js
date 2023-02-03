import { buttonsMain } from "./componentes/buttons-main/buttonsMain.js";
import { asyncFetch } from "./componentes/getApi/getApi.js";

let value = undefined;
const getUrl = new URLSearchParams(window.location.search);
value = getUrl.get("value");

buttonsMain();

if (value != undefined) {
    asyncFetch(value);
}
