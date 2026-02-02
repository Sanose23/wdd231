// Set the hidden timestamp to the current date/time
document.getElementById("timestamp").value = new Date().toISOString();

// Modal Functionality
const modals = {
    "card-np": document.getElementById("modal-np"),
    "card-bronze": document.getElementById("modal-bronze"),
    "card-silver": document.getElementById("modal-silver"),
    "card-gold": document.getElementById("modal-gold")
};

document.querySelectorAll(".level-card").forEach(card => {
    card.querySelector(".modal-btn").addEventListener("click", () => {
        modals[card.id].showModal();
    });
});

document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest("dialog").close();
    });
});

// Basic Menu Toggle (Standard for your site)
const menuButton = document.querySelector('#menu');
const navElement = document.querySelector('#navElement');

menuButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    menuButton.textContent = menuButton.textContent === '☰' ? '❌' : '☰';
});