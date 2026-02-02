const urlParams = new URLSearchParams(window.location.search);
const results = document.querySelector('#results');

results.innerHTML = `
    <p><strong>Name:</strong> ${urlParams.get('fname')} ${urlParams.get('lname')}</p>
    <p><strong>Email:</strong> ${urlParams.get('email')}</p>
    <p><strong>Phone:</strong> ${urlParams.get('phone')}</p>
    <p><strong>Organization:</strong> ${urlParams.get('organization')}</p>
    <p><strong>Timestamp:</strong> ${urlParams.get('timestamp')}</p>
`;