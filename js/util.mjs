import { VIBE_MAP } from "./constants.js";

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}
// save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}


// set a listener for both touchend and click
export function setClick(selector, callback) {
    qs(selector).addEventListener("touchend", (event) => {
        event.preventDefault();
        callback();
    });
    qs(selector).addEventListener("click", callback);
}

// Pull parameters from the URL
export function getParam(paramName) {
    const params = new URLSearchParams(window.location.search);
    return params.get(paramName);
}


// Self explanitory
export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {

    if (clear) parentElement.innerHTML = '';

    const htmlItems = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, htmlItems.join(''));
}


// Self explanitory
export function renderWithTemplate(template, parentElement, callback, data) {
    const htmlItems = template;
    parentElement.innerHTML = htmlItems

    if (callback) {
        callback(data);
    }
}

// Load templates and convert them into text.
async function loadTemplate(path) {
    const result = await fetch(path);
    const template = await result.text();
    return template
}

// Dynamically load the header and footer from the partials folder
export async function loadHeaderFooter(callback) {
    const headerElement = document.querySelector("header")
    const footerElement = document.querySelector("footer")


    const headerTemplate = await loadTemplate("/src/partials/header.html")
    const footerTemplate = await loadTemplate("/src/partials/footer.html")

    renderWithTemplate(headerTemplate, headerElement, callback, null)
    renderWithTemplate(footerTemplate, footerElement)
}

// Self explanitory
export function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// Self explanitory
export function alertMessage(message) {
    const alert = document.createElement('div');
    const exitAlert = document.createElement('p')
    alert.innerHTML = `${message}`
    alert.classList.add('alert');
    exitAlert.textContent = '✕'
    exitAlert.classList.add('exit-alert')
    alert.appendChild(exitAlert);

    exitAlert.addEventListener('click', function (event) {
        if (event) {
            alert.remove();
        }
    })

    const main = document.querySelector('main');
    main.prepend(alert)
}



export function vibeToWithGenres(vibeKey) {
    const genres = VIBE_MAP[vibeKey]?.genres ?? [];
    return genres.join("|");
}

export function getVibeKeys() {
    return Object.keys(VIBE_MAP);
}
