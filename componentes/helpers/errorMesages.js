export const errorFetch = () => {
    const error = document.getElementById("error");
    error.classList.add("show-error");
    error.innerHTML = `<p>database connection error, <br> try again after a few minutes</p>`;

    setTimeout(() => {
        error.classList.remove("show-error");
    }, 5000);
};

export const errorFetch2 = () => {
    const error = document.getElementById("error");
    error.classList.add("show-error");
    error.innerHTML = `<p>database connection error, <br> try again after a few minutes</p><button id="error-button">Back</button>`;

    document.getElementById("error-button").addEventListener("click", function () {
        return history.back();
    });
};

export const errorSearch = () => {
    const error = document.getElementById("error");
    error.classList.add("show-error");
    error.innerHTML = `<p>You must type at least three characters</p><button id="error-button">Close</button>`;

    document.getElementById("error-button").addEventListener("click", function () {
        return error.classList.remove("show-error");
    });
};

export const errorSearchNotFound = (value) => {
    const error = document.getElementById("error");
    error.classList.add("show-error");
    error.innerHTML = `<p>There are no results for this search</p><button id="error-button">Back</button>`;

    document.getElementById("error-button").addEventListener("click", function () {
        error.classList.remove("show-error");
        return (location.href = `../../../index.html?value=${value}`);
    });
};
