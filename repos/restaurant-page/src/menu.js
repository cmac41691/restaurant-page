export default function loadMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const item1 = document.createElement("p");
    item1.textContent = "Spaghetti Bolognese";

    const item2 = document.createElement("p");
    item2.textContent = "Marherita Pizza";

    const item3 = document.createElement("p");
    item3.textContent = "Caesar Salad";

    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);

    return menu;
}












