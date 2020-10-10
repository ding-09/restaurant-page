import { mainPage } from "./index.js";
import createHeader from "./header.js";
import createHomePage from "./home.js";

export default function loadPage() {
    const header = createHeader();
    const homePage = createHomePage();


    mainPage.appendChild(header);
    mainPage.appendChild(homePage);
}

