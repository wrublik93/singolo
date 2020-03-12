const MENU = document.querySelector('.navbar-list');
console.log(MENU.querySelectorAll('a'));

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
    event.target.classList.add('selected')
}) 