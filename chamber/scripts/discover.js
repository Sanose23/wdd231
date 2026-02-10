import { attractions } from '../data/discover.mjs';

// --- 1. Navigation & Footer ---
const menuButton = document.querySelector('#menu');
const navElement = document.querySelector('#navElement');
const yearSpan = document.querySelector("#year");
const lastModSpan = document.querySelector("#lastModified");

menuButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    menuButton.textContent = navElement.classList.contains('open') ? '❌' : '☰';
});

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModSpan) lastModSpan.textContent = `Last Modified: ${document.lastModified}`;

// --- 2. LocalStorage Visit Logic ---
const visitMessage = document.getElementById('visit-message');
const lastVisit = window.localStorage.getItem('lastVisit-ls');
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSince = Math.floor((now - lastVisit) / 86400000);
    if (daysSince < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitMessage.textContent = `You last visited ${daysSince} ${daysSince === 1 ? "day" : "days"} ago.`;
    }
}
localStorage.setItem('lastVisit-ls', now);

// --- 3. Build Discovery Cards ---
const container = document.getElementById('attractions-container');

attractions.forEach((item, index) => {
    const card = document.createElement('section');
    card.className = `card discover-card card-${index}`;
    
    card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
            <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button class="learn-more">Learn More</button>
    `;
    container.appendChild(card);
});