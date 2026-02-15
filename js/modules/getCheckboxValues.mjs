export default function getCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]`)
    const checkboxArray = Array.from(checkboxes);

    const selectedCheckboxes = checkboxArray.filter(box => box.checked);

    const checkboxValues = selectedCheckboxes.map(box => box.value);
    return checkboxValues;
}