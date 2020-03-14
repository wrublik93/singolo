//----------------------------
//constants
//----------------------------
const NAVBAR_LIST = document.querySelector('.navbar-list');
const PORTFOLIO_TABS = document.querySelector('.filter');
const PORTFOLIO_IMAGES = document.querySelectorAll('.portfolio-images img');
const PORTFOLIO_IMAGES_BORDER = document.querySelector('.portfolio-images');
const GET_QUOTES = document.querySelector('.quotes');
const GET_QUOTE_FORM_SUBMIT = document.querySelector('.contact-form .contact-form-submit');

//----------------------------
//SECTIONS SITE
//----------------------------
const HEADER = document.querySelector('.header');
const SLIDER = document.querySelector('.slider');
const SERVICES = document.querySelector('.services');
const PORTFOLIO = document.querySelector('.portfolio');
const ABOUT_US = document.querySelector('.about-us');
const CONTACT = document.querySelector('.quotes');
const FOOTER = document.querySelector('.footer');

//----------------------------
//LINKS NAVBAR
//----------------------------
const HOME_LINK = document.querySelector('.navbar-list-item-home');
const SERVICES_LINK = document.querySelector('.navbar-list-item-services');
const PORTFOLIO_LINK = document.querySelector('.navbar-list-item-portfolio');
const ABOUT_LINK = document.querySelector('.navbar-list-item-about');
const CONTACT_LINK = document.querySelector('.navbar-list-item-contact');

//----------------------------
//DELETE HASH AFTER REFRESH PAGE
//----------------------------
window.onload = function() {
    window.location.hash = '';
};

//----------------------------
// 1) task with header and active links
//----------------------------
NAVBAR_LIST.addEventListener('click', (event) => {
    if(event.target.tagName == 'A') {
        NAVBAR_LIST.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        event.target.classList.add('selected');
        if(event.target.href.includes('services')) {
            window.scroll(0, SERVICES.offsetTop - HEADER.offsetHeight + 2);
        };
        if(event.target.href.includes('portfolio')) {
            window.scroll(0, PORTFOLIO.offsetTop - HEADER.offsetHeight + 2);
        };
        if(event.target.href.includes('about')) {
            window.scroll(0, ABOUT_US.offsetTop - HEADER.offsetHeight + 2);
        };
        if(event.target.href.includes('contact')) {
            window.scroll(0, CONTACT.offsetTop - HEADER.offsetHeight + 2);
        };
    };
});

//----------------------------
// 1.1) change active links when scroll page  
//----------------------------
window.addEventListener('scroll', () => {
    if(window.scrollY < SERVICES.offsetTop - HEADER.offsetHeight) {
        NAVBAR_LIST.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        HOME_LINK.classList.add('selected')
    };
    
    if(window.scrollY >= SERVICES.offsetTop - HEADER.offsetHeight && window.scrollY < PORTFOLIO.offsetTop - HEADER.offsetHeight) {
        NAVBAR_LIST.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        SERVICES_LINK.classList.add('selected')
    };
    
    if(window.scrollY >= PORTFOLIO.offsetTop - HEADER.offsetHeight) {
        NAVBAR_LIST.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        PORTFOLIO_LINK.classList.add('selected')
    };
    
    if(window.scrollY >= ABOUT_US.offsetTop - HEADER.offsetHeight) {
        NAVBAR_LIST.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        ABOUT_LINK.classList.add('selected')
    };
    
    if(window.scrollY >= CONTACT.offsetTop - HEADER.offsetHeight) {
        NAVBAR_LIST.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        CONTACT_LINK.classList.add('selected')
    };
})








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

GET_QUOTE_FORM_SUBMIT.addEventListener('click', (event) => {
    /* event.preventDefault(); */
    document.querySelector('.block-message').classList.remove('block-message-hidden')
    //let contactFormName = document.querySelector('.contact-form .contact-form-name').value;
    //let contactFormEmail = document.querySelector('.contact-form .contact-form-email').value;
    let contactFormSubject = document.querySelector('.contact-form .contact-form-subject').value;
    let contactFormDescription = document.querySelector('.contact-form .contact-form-description').value;
    //console.log(contactFormName, contactFormEmail, contactFormSubject, contactFormDescription);
    if(contactFormSubject !== '') {
        document.querySelector('.message .block-message-subject').innerText = 'Тема: ' + contactFormSubject;
    } else {
        document.querySelector('.message .block-message-subject').innerText = 'Без темы'
    };
    if(contactFormDescription !== '') {
        document.querySelector('.message .block-message-description').innerText = 'Описание: ' + contactFormDescription;
    } else {
        document.querySelector('.message .block-message-description').innerText = 'Без описания'
    }
});
