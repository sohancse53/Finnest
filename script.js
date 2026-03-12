const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('max-h-0');
    menu.classList.toggle('max-h-100');
     menu.classList.toggle('py-6');
});
