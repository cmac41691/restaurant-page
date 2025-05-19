export default function loadHome(){

    const home = document.createElement("div");
    home.classList.add("home");

    const heading = document.createElement("h1")
    heading.textContent = "Welcome to Flavor Haven!";

    const description = document.createElement("p");
    description.textContent = "Enjoy handcraft meals, fresh ingredients, and warm atomosphere. ";


    home.appendChild(heading);
    home.appendChild(description);

    return home;
}