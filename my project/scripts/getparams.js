// This script runs specifically on thanks.html
const resultsElement = document.querySelector('#results');

// 1. Get the query string from the URL
const queryString = window.location.search;

// 2. Parse the parameters
const urlParams = new URLSearchParams(queryString);

// 3. Build the display content
if (queryString) {
    let displayHTML = `
        <div class="data-display">
            <p><strong>Explorer Name:</strong> ${urlParams.get('first_name')}</p>
            <p><strong>Contact Email:</strong> ${urlParams.get('user_email')}</p>
            <p><strong>Interest:</strong> ${urlParams.get('adventure_type')}</p>
            <p><strong>Notes:</strong> ${urlParams.get('user_comments') || 'None'}</p>
        </div>
    `;
    resultsElement.innerHTML = displayHTML;
} else {
    resultsElement.innerHTML = "<p>No submission data found. Please use the contact form.</p>";
}

// Update year in footer (simple version for this page)
document.querySelector('#currentyear').textContent = new Date().getFullYear();