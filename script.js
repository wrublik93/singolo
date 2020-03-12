const MENU = document.querySelector('.navbar-list');
const PORTFOLIO_TABS = document.querySelector('.filter');
const PORTFOLIO_IMAGES = document.querySelectorAll('.portfolio-images img');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
    event.target.classList.add('selected')
});

PORTFOLIO_TABS.addEventListener('click', (event) => {
    if(event.target.classList[1] !== 'selected') {
        PORTFOLIO_TABS.querySelectorAll('button').forEach (el => el.classList.remove('selected'));
        event.target.classList.add('selected');
        let copy = [];
        PORTFOLIO_IMAGES.forEach(el => copy.push(el.src));
        copy.push(copy[0]);
        copy.splice(0,1);
        copy.forEach((el, index) => PORTFOLIO_IMAGES[index].src = el);
    }
})

/* PORTFOLIO_IMAGES.addEventListener('click', (event)=>{
    PORTFOLIO_IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('img'));
    event.target.classList.add('img')
}) */