import { qs } from "./util.mjs";
import { setClick } from "./util.mjs";
import getCheckboxValues from "./modules/getCheckboxValues.mjs";


function buildYearOption(year) {
    const yearElement = document.createElement("option");
    yearElement.value = year;
    yearElement.textContent = year;
    return yearElement;
}

const currentYear = new Date().getFullYear();
const oldestYear = 1950;

const startYearElement = qs('#start-year-select');
const endYearElement = qs('#end-year-select');

function generateYearOptions() {

    for (let year = oldestYear; year <= currentYear; year++) {
        const startYearOption = buildYearOption(year);
        const endYearOption = buildYearOption(year);

        startYearElement.appendChild(startYearOption);
        endYearElement.appendChild(endYearOption);
        endYearElement.value = String(currentYear);
    }
}

function syncYearOptions() {
    const startYear = Number(startYearElement.value);
    const endYear = Number(endYearElement.value);

    for (const option of endYearElement.options) {
        const year = Number(option.value);
        if (year < startYear) {
            option.disabled = true
        }
        else {
            option.disabled = false
        }
    }
    for (const option of startYearElement.options) {
        const year = Number(option.value);
        if (year > endYear) {
            option.disabled = true
        }
        else {
            option.disabled = false
        }
    }
}

startYearElement.addEventListener("change", () => {
    syncYearOptions();
});

endYearElement.addEventListener("change", () => {
    syncYearOptions();
});


function getSelectedYearRange() {
    return {
        startYear: Number(startYearElement.value),
        endYear: Number(endYearElement.value)
    };
}


function getFormEntryObject() {
    const object = {
        vibes: getCheckboxValues("vibe[]"),
        yearRange: getSelectedYearRange(),
        ratings: getCheckboxValues("rating")
    }
    console.log(object)
}




setClick('#find-movies', getFormEntryObject)



generateYearOptions();