export default function loadMenu() {
    const menu = document.createElement("div"); 
    menu.classList.add("menu");

   const list = document.createElement("ul");

   const items = ["Spaghetti Bologese", "Margherite Pizza", "Ceasar Salad"];
   items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
   });

  
    menu.appendChild(list); 
    return menu;
}















