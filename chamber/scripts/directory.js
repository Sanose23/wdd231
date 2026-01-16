const url = "data/members.json";
const display = document.querySelector("#directory-container");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const mainnav = document.querySelector("#navElement");
const hambutton = document.querySelector("#menu");

// Navigation Toggle
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.textContent = hambutton.textContent === '☰' ? '❌' : '☰';
});

// Async/Await Fetch
async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    display.innerHTML = ""; 
    members.forEach((member) => {
        let card = document.createElement("section");
        card.innerHTML = `
            <div class="card-header">
                <h3>${member.name}</h3>
                <p class="tagline"><em>${member.tagline}</em></p>
            </div>
            <div class="card-body">
                <img src="${member.image}" alt="${member.name} logo" loading="lazy">
                <div class="card-text">
                    <p><strong>ADDRESS:</strong> ${member.address}</p>
                    <p><strong>PHONE:</strong> ${member.phone}</p>
                    <p><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website.replace('https://', '')}</a></p>
                </div>
            </div>
        `;
        display.appendChild(card);
    });
};

// Toggle Logic
gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

// Footer Dates
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

getMembers();