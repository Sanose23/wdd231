import { fetchWeather } from './weather.js';
import { renderAdventures } from './adventures.js';

// DOM Elements
const nav = document.querySelector('#primary-nav');
const ham = document.querySelector('#hamburger');
const grid = document.querySelector('#adventure-grid');
const year = document.querySelector('#currentyear');

// Hamburger Toggle
ham.addEventListener('click', () => nav.classList.toggle('open'));

// Year and Local Storage
year.textContent = new Date().getFullYear();
localStorage.setItem('lastVisit', new Date());

// Load Content
async function init() {
    // ... (07d2beb85c5733cb766fe732e9e1fd1c)

    const res = await fetch('data/adventures.json');
    const data = await res.json();
    
    const grid = document.querySelector('#adventure-grid');
    
    if (grid) {
        // If we are on the index.html, only show the first 3 items
        // If we are on adventures.html, show all 15
        const isHomePage = window.location.pathname.includes('index.html') || window.location.pathname === '/';
        const displayData = isHomePage ? data.slice(0, 3) : data;
        
        renderAdventures(displayData, grid);
    }


    // Modal
    const modal = document.querySelector('#safety-modal');
    document.querySelector('#open-modal')?.addEventListener('click', () => modal.showModal());
    document.querySelector('#close-modal')?.addEventListener('click', () => modal.close());
}

init();