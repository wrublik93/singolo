const MENU = document.querySelector('.navbar-list');
const PORTFOLIO_TABS = document.querySelector('.filter');
const PORTFOLIO_IMAGES = document.querySelectorAll('.portfolio-images img');
const PORTFOLIO_IMAGES_BORDER = document.querySelector('.portfolio-images');


MENU.addEventListener('click', (event) => {
    if(event.target.tagName == 'A') {
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        event.target.classList.add('selected')
    }
});

PORTFOLIO_TABS.addEventListener('click', (event) => {
    if(event.target.classList[1] !== 'selected' && event.target.tagName == 'BUTTON') {
        PORTFOLIO_TABS.querySelectorAll('button').forEach (el => el.classList.remove('selected'));
        event.target.classList.add('selected');
        let copy = [];
        PORTFOLIO_IMAGES_BORDER.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-image-border'));
        PORTFOLIO_IMAGES.forEach(el => copy.push(el.src));
        copy.push(copy[0]);
        copy.splice(0,1);
        copy.forEach((el, index) => PORTFOLIO_IMAGES[index].src = el);
    }
});

PORTFOLIO_IMAGES_BORDER.addEventListener('click', (event)=>{
    if(event.target.classList[0] !== 'portfolio-image-border' && event.target.tagName == 'IMG') {
        PORTFOLIO_IMAGES_BORDER.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-image-border'));
        event.target.classList.add('portfolio-image-border')   
    }
});

