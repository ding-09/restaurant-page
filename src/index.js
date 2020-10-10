import css from "./styles.css";
import createHeader from "./header.js";

const mainPage = document.getElementById("content");
const header = createHeader();
mainPage.appendChild(header);