const mainnav = document.querySelector('#animateMe');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.textContent = hambutton.textContent === '☰' ? '❌' : '☰';
});