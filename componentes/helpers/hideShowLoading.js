export const showLoading = () => {
    const loader = document.getElementById("loading");
    const containerResults = document.getElementById("result-list");

    containerResults.classList.remove("show-results");
    loader.classList.add("show-loader");
};

export const hideLoading = () => {
    const loader = document.querySelector("#loading");
    const containerResults = document.getElementById("result-list");

    containerResults.classList.add("show-results");
    loader.classList.remove("show-loader");
};
