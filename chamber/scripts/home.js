const memberUrl = "data/members.json";
const spotlightContainer = document.querySelector("#spotlight-cards");
// This looks for your weather div
const weatherInfo = document.querySelector("#weather-info") || document.querySelector("#weather-current");
const forecastInfo = document.querySelector("#forecast-info") || document.querySelector("#weather-forecast");
const mainnav = document.querySelector("#navElement");
const hambutton = document.querySelector("#menu");

// --- 1. Navigation Toggle ---
if (hambutton) {
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('open');
        hambutton.textContent = mainnav.classList.contains('open') ? '❌' : '☰';
    });
}

// --- 2. Weather API (Ibadan) ---
const apiKey = '5658cd1f252a9e0ed05aa062e02d2cce'; 
const lat = 7.3775;
const lon = 3.9470;
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            console.error("Weather API error. Status:", response.status);
        }
    } catch (error) {
        console.error("Weather fetch failed:", error);
    }
}

function displayWeather(data) {
    if (!weatherInfo) return;

    const current = data.list[0];
    const desc = current.weather[0].description;
    
    weatherInfo.innerHTML = `
        <p><strong>Current:</strong> ${Math.round(current.main.temp)}°C</p>
        <p style="text-transform: capitalize;">${desc}</p>
    `;
    
    // Filter for 3-day forecast at 12:00 PM
    const forecastData = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
    
    if (forecastInfo) {
        forecastInfo.innerHTML = '<h4>3-Day Forecast</h4>';
        forecastData.forEach(day => {
            const date = new Date(day.dt_txt).toLocaleDateString('en-US', {weekday: 'short'});
            forecastInfo.innerHTML += `<p>${date}: ${Math.round(day.main.temp)}°C</p>`;
        });
    }
}

// --- 3. Random Spotlights (Criteria 11) ---
async function getSpotlights() {
    if (!spotlightContainer) return;

    try {
        const response = await fetch(memberUrl);
        const data = await response.json();
        
        // Filter for Gold (3) and Silver (2)
        const eligible = data.members.filter(m => m.membershipLevel >= 2);
        
        // Shuffle and pick 3
        const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

        spotlightContainer.innerHTML = ""; // Clear existing
        selected.forEach(m => {
            const card = document.createElement("section");
            card.className = "card spotlight-card";
            card.innerHTML = `
                <h4>${m.name}</h4>
                <img src="${m.image}" alt="${m.name} logo" loading="lazy" style="width:100px; height:auto;">
                <p>${m.phone}</p>
                <p><a href="${m.website}" target="_blank">Website</a></p>
                <p><em>${m.membershipLevel === 3 ? 'Gold' : 'Silver'} Member</em></p>
            `;
            spotlightContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Spotlight fetch failed:", error);
    }
}

// Footer Info
const yearSpan = document.querySelector("#year");
const lastModSpan = document.querySelector("#lastModified");

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModSpan) lastModSpan.textContent = `Last Modified: ${document.lastModified}`;

fetchWeather();
getSpotlights();