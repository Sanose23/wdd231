// weather.js
const apiKey = '07d2beb85c5733cb766fe732e9e1fd1c';
const city = 'London'; // You can change this to any city
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

export async function fetchWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Weather Fetch Error:", error.message);
        // Fallback data so the site doesn't break if the API limit is hit
        return {
            main: { temp: "N/A" },
            weather: [{ description: "unavailable", icon: "01d" }]
        };
    }
}
