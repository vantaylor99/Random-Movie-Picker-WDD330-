import { VIBE_MAP } from "./constants.js";
import { BASE_PATH } from "../config.env.js";

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
    const el = qs(selector);
    if (!el) return;
    el.addEventListener("touchend", (event) => {
        event.preventDefault();
        callback();
    });
    el.addEventListener("click", callback);
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
// Resolve path relative to this module so it works on GitHub Pages (subpath) and locally.
async function loadTemplate(path) {
    const url = new URL(path, import.meta.url).href;
    const result = await fetch(url);
    const template = await result.text();
    return template;
}

// Full base URL (origin + path) so assets work everywhere. Use absolute URLs in templates.
function getBaseUrl() {
    return location.origin + BASE_PATH;
}

// Resolve __BASE_PATH__ in templates using config.env.js (local vs prod).
function resolveBasePath(template) {
    return template.replace(/__BASE_PATH__/g, getBaseUrl());
}

// Dynamically load the header and footer from the partials folder
export async function loadHeaderFooter(callback) {
    const headerElement = document.querySelector("header");
    const footerElement = document.querySelector("footer");

    let headerTemplate = await loadTemplate("../partials/header.html");
    headerTemplate = resolveBasePath(headerTemplate);

    renderWithTemplate(headerTemplate, headerElement, callback, null);
    let footerTemplate = await loadTemplate("../partials/footer.html");
    renderWithTemplate(resolveBasePath(footerTemplate), footerElement, null, null);
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


export function getRandomNumberFromMax(pageCount) {
    const maxPageLimit = Math.min(pageCount, 500);
    const randomNumber = (Math.floor(Math.random() * maxPageLimit));
    return randomNumber;
}