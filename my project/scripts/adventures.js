export function renderAdventures(data, element) {
    element.innerHTML = data.map(item => `
        <div class="card">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <h3>${item.title}</h3>
            <p>Difficulty: ${item.level}</p>
            <p>Temp: ${item.tempRange}</p>
            <p>${item.desc}</p>
        </div>
    `).join('');
}