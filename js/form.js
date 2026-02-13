import { qs } from "/js/util.mjs";
import { setClick } from "/js/util.mjs";


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


function getSelectedVibeItems() {
    const checkboxes = document.querySelectorAll('input[name="vibe[]"]')
    const checkboxArray = Array.from(checkboxes);

    console.log(checkboxArray)

    const selectedCheckboxes = checkboxArray.filter(box => box.checked);
    console.log(selectedCheckboxes);

    const checkboxValues = selectedCheckboxes.map(box => box.value);
    console.log(checkboxValues);
}


setClick('#find-movies', getSelectedVibeItems)

generateYearOptions();