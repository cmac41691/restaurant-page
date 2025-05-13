import loadMenu from "./menu";
import loadHome from "./home";
import loadContact from "./contact";

const content = document.getElementById("content");
content.textContent = "";
content.appendChild(loadHome());

document.getElementById("home-tab").addEventListener("click", () => {
content.textContent= "";
content.appendChild(loadHome());
});

document.getElementById("menu-tab").addEventListener("click", () => {
content.textContent= "";
content.appendChild(loadMenu());
});

document.getElementById("contact-tab").addEventListener("click", () => {
content.textContent= "";
content.appendChild(loadContact());
});





