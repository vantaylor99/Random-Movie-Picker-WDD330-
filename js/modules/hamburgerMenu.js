import { qs, setClick } from "../util.mjs";


export function setupHamburgerMenu() {
    const navContainer = qs(".nav-container");


    setClick(".hamburger", () => toggleShow(navContainer))
    setClick(".close-nav", () => toggleShow(navContainer))


    function toggleShow(element) {
        element.classList.toggle('show');
    }

}

