import { asyncFetch } from "../getApi/getApi.js";

export const pagination = (dataRes, value) => {
    //Go Next
    if (dataRes.next) {
        const bottonNext = document.querySelector(".next");
        bottonNext.innerHTML = `<div id="next"></div>`;
        const nextButton = document.getElementById("next");

        //event listener for next button
        nextButton.addEventListener("click", (event) => {
            event.preventDefault();
            const lastPos = dataRes.next.lastIndexOf("/");
            const nextPos = dataRes.next.substring(lastPos);
            const endPoint = value + nextPos;

            return asyncFetch(endPoint);
        });
    } else {
        const nextButton = document.getElementById("next");
        if (!nextButton) return;
        nextButton.remove();
    }

    //Go previous
    if (dataRes.previous) {
        const bottonPrev = document.querySelector(".prev");
        bottonPrev.innerHTML = `<div id="prev"></div>`;
        const prevButton = document.getElementById("prev");

        //event listener for prev button
        prevButton.addEventListener("click", (event) => {
            event.preventDefault();
            const lastPos = dataRes.previous.lastIndexOf("/");
            const prevtPos = dataRes.previous.substring(lastPos);
            const endPoint = value + prevtPos;

            return asyncFetch(endPoint);
        });
    } else {
        const prevButton = document.getElementById("prev");
        if (!prevButton) return;
        prevButton.remove();
    }
};
