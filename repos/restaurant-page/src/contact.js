export default function loadContact(){
    const contact = document.createElement("div");
    contact.classList.add("contact");
    
    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const phone = document.createElement("p");
    phone.textContent = "Phone: 123-456-7890";

    const address = document.createElement("p")
    address.textContent = "Address: 871 Main Toppings Street, Foodcity"


    contact.appendChild(heading)
    contact.appendChild(phone)
    contact.appendChild(address)


    return contact;

}