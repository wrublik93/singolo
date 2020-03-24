//----------------------------
// CONSTANTS COMMON
//----------------------------
const BODY = document.querySelector('body');
const NAVBAR_LIST = document.querySelector('.navbar-list');
const PORTFOLIO_TABS = document.querySelector('.filter');
const PORTFOLIO_IMAGES = document.querySelectorAll('.portfolio-images img');
const PORTFOLIO_IMAGES_BORDER = document.querySelector('.portfolio-images');
const GET_QUOTES = document.querySelector('.quotes');
const GET_QUOTE_FORM_SUBMIT = document.querySelector('.contact-form .contact-form-submit');

//----------------------------
// SECTIONS SITE
//----------------------------
const HEADER = document.querySelector('.header');
const SLIDER = document.querySelector('.slider');
const SERVICES = document.querySelector('.services');
const PORTFOLIO = document.querySelector('.portfolio');
const ABOUT_US = document.querySelector('.about-us');
const CONTACT = document.querySelector('.quotes');
const FOOTER = document.querySelector('.footer');

//----------------------------
// LINKS NAVBAR
//----------------------------
const HOME_LINK = document.querySelector('.navbar-list-item-home');
const SERVICES_LINK = document.querySelector('.navbar-list-item-services');
const PORTFOLIO_LINK = document.querySelector('.navbar-list-item-portfolio');
const ABOUT_LINK = document.querySelector('.navbar-list-item-about');
const CONTACT_LINK = document.querySelector('.navbar-list-item-contact');

//----------------------------
// PHONES
//----------------------------
const BUTTON_PHONE_LEFT = document.querySelector('.button-phone-left');
const BUTTON_PHONE_RIGHT = document.querySelector('.button-phone-right');
const SCREEN_PHONE_LEFT = document.querySelector('.screen-phone-left');
const SCREEN_PHONE_RIGHT = document.querySelector('.screen-phone-right');
const PHONE_VERTICAL_IMG = document.querySelector('.phone-vertical img');
const PHONE_HORIZONTAL_IMG = document.querySelector('.phone-horizontal img');

//----------------------------
// CONTACT FORM
//----------------------------
const CONTACT_FORM = document.querySelector('.contact-form');
const CONTACT_FORM_NAME = document.querySelector('.contact-form .contact-form-name');
const CONTACT_FORM_EMAIL = document.querySelector('.contact-form .contact-form-email');
const CONTACT_FORM_SUBJECT = document.querySelector('.contact-form .contact-form-subject');
const CONTACT_FORM_DESCRIPTION = document.querySelector('.contact-form .contact-form-description');

//----------------------------
// MODAL MESSAGE WINDOW
//----------------------------
const BLOCK_MESSAGE = document.querySelector('.block-message');
const BLOCK_MESSAGE_SUBJECT = document.querySelector('.message .block-message-subject');
const BLOCK_MESSAGE_DESCRIPTION = document.querySelector('.message .block-message-description');
const MESSAGE_AGREE_HIDDEN = document.querySelector('.message-agree-hidden');

//----------------------------
// DELETE HASH AFTER REFRESH PAGE
//----------------------------
window.onload = function() {
    window.location.hash = '';
};

//----------------------------
// HEADER_TASK: task with header and active links
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
// HEADER_TASK: change active links when scroll page  
//----------------------------
window.addEventListener('scroll', () => {
    if(window.scrollY < SERVICES.offsetTop - HEADER.offsetHeight) {
        NAVBAR_LIST.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        HOME_LINK.classList.add('selected');
    };
    
    if(window.scrollY >= SERVICES.offsetTop - HEADER.offsetHeight && window.scrollY < PORTFOLIO.offsetTop - HEADER.offsetHeight) {
        NAVBAR_LIST.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        SERVICES_LINK.classList.add('selected');
    };
    
    if(window.scrollY >= PORTFOLIO.offsetTop - HEADER.offsetHeight) {
        NAVBAR_LIST.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        PORTFOLIO_LINK.classList.add('selected');
    };
    
    if(window.scrollY >= ABOUT_US.offsetTop - HEADER.offsetHeight) {
        NAVBAR_LIST.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        ABOUT_LINK.classList.add('selected');
    };
    
    if(window.scrollY >= CONTACT.offsetTop - HEADER.offsetHeight) {
        NAVBAR_LIST.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
        CONTACT_LINK.classList.add('selected');
    };
})

//----------------------------
// PORTFOLIO_TASK: switching tabs and changing images places
//----------------------------
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

//----------------------------
// PORTFOLIO_TASK: change border images (active images)
//----------------------------
PORTFOLIO_IMAGES_BORDER.addEventListener('click', (event)=>{
    if(event.target.classList[0] !== 'portfolio-image-border' && event.target.tagName == 'IMG') {
        PORTFOLIO_IMAGES_BORDER.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-image-border'));
        event.target.classList.add('portfolio-image-border');
    } else if(event.target.classList[0] == 'portfolio-image-border' && event.target.tagName == 'IMG') {
        PORTFOLIO_IMAGES_BORDER.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-image-border'));
    }
});

//----------------------------
// QUOTE_TASK: modal window (open)
//----------------------------
GET_QUOTE_FORM_SUBMIT.addEventListener('click', (event) => {

    // check validate input of name
    let validateName = CONTACT_FORM_NAME.validity.valid;
    let validateEmail = CONTACT_FORM_EMAIL.validity.valid;

    if(validateName == true && validateEmail == true) {
        event.preventDefault();
        BLOCK_MESSAGE.classList.remove('block-message-hidden');
        BODY.classList.add('scroll-hidden');
        
        // values for subject and description
        let contactFormSubject = CONTACT_FORM_SUBJECT.value;
        let contactFormDescription = CONTACT_FORM_DESCRIPTION.value;
        if(contactFormSubject !== '') {
            BLOCK_MESSAGE_SUBJECT.innerText = 'Тема: ' + contactFormSubject;
        } else {
            BLOCK_MESSAGE_SUBJECT.innerText = 'Без темы';
        };
        if(contactFormDescription !== '') {
            BLOCK_MESSAGE_DESCRIPTION.innerText = 'Описание: ' + contactFormDescription;
        } else {
            BLOCK_MESSAGE_DESCRIPTION.innerText = 'Без описания';
        };
    }
});

//----------------------------
// QUOTE_TASK: modal window (close)
//----------------------------
MESSAGE_AGREE_HIDDEN.addEventListener('click', (event) => {
    BLOCK_MESSAGE.classList.add('block-message-hidden');
    BODY.classList.remove('scroll-hidden');
    CONTACT_FORM.reset();
});

//----------------------------
// SLIDER_1_TASK: turning on phone (left) with button
//----------------------------
BUTTON_PHONE_LEFT.addEventListener('click', (event) => {
    if(!PHONE_VERTICAL_IMG.classList.value.includes('display-hidden')) {
        PHONE_VERTICAL_IMG.classList.add('display-hidden')
    } else if(PHONE_VERTICAL_IMG.classList.value.includes('display-hidden')) {
        PHONE_VERTICAL_IMG.classList.remove('display-hidden')
    };
});

//----------------------------
// SLIDER_1_TASK: turning on phone (right) with button
//----------------------------
BUTTON_PHONE_RIGHT.addEventListener('click', (event) => {
    if(!PHONE_HORIZONTAL_IMG.classList.value.includes('display-hidden')) {
        PHONE_HORIZONTAL_IMG.classList.add('display-hidden')
    } else if(PHONE_HORIZONTAL_IMG.classList.value.includes('display-hidden')) {
        PHONE_HORIZONTAL_IMG.classList.remove('display-hidden')
    };
});

//----------------------------
// SLIDER_1_TASK: turning on phone (left) with screen
//----------------------------
 PHONE_VERTICAL_IMG.addEventListener('click', (event) => {
    if(!PHONE_VERTICAL_IMG.classList.value.includes('display-hidden')) {
        PHONE_VERTICAL_IMG.classList.add('display-hidden')
    };
});

SCREEN_PHONE_LEFT.addEventListener('click', (event) => {
    if(PHONE_VERTICAL_IMG.classList.value.includes('display-hidden')) {
        PHONE_VERTICAL_IMG.classList.remove('display-hidden')
    };
});

//----------------------------
// SLIDER_1_TASK: turning on phone (right) with screen
//----------------------------
 PHONE_HORIZONTAL_IMG.addEventListener('click', (event) => {
    if(!PHONE_HORIZONTAL_IMG.classList.value.includes('display-hidden')) {
        PHONE_HORIZONTAL_IMG.classList.add('display-hidden')
    };
});

SCREEN_PHONE_RIGHT.addEventListener('click', (event) => {
    if(PHONE_HORIZONTAL_IMG.classList.value.includes('display-hidden')) {
        PHONE_HORIZONTAL_IMG.classList.remove('display-hidden')
    };
}); 

//----------------------------
// SLIDER_TASK: carousel
//----------------------------
let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;
let el = document.querySelector('.carousel');

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
};

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('current', direction);
    });
};

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('current');
        isEnabled = true;
    })
};

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
};

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
};

document.querySelector('.left-button').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
    isBlue();
});


document.querySelector('.right-button').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
    isBlue();
});

let isBlue = () => {
    if (document.querySelector('.blue').classList.contains('next')) {
        document.querySelector('.slider').style.backgroundColor = '#648BF0';
        document.querySelector('.slider').style.borderBottom = '6px solid #5C85EF';
    } else { 
        document.querySelector('.slider').style.backgroundColor = '#f06c64';
        document.querySelector('.slider').style.borderBottom = '6px solid #ea676b';
    }
};

//----------------------------
// SLIDER_2_TASK: turning on phone (center) with button and screen
//----------------------------
const THREE_PHONE_BUTTON_CENTER = document.querySelector('.three-phone-button-center');
const THREE_PHONE_SCREEN_CENTER = document.querySelector('.three-phone-screen-center');
const THREE_PHONE_SCREEN_CENTER_TRANSPARENT = document.querySelector('.three-phone-screen-center-transparent');

THREE_PHONE_BUTTON_CENTER.addEventListener('click', (event) => {
    if(THREE_PHONE_SCREEN_CENTER.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_CENTER_TRANSPARENT.classList.add('display-hidden');
        THREE_PHONE_SCREEN_CENTER.classList.remove('display-hidden');
    } else if(!THREE_PHONE_SCREEN_CENTER.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_CENTER_TRANSPARENT.classList.remove('display-hidden');
        THREE_PHONE_SCREEN_CENTER.classList.add('display-hidden');
    };
});

THREE_PHONE_SCREEN_CENTER_TRANSPARENT.addEventListener('click', (event) => {
    if(THREE_PHONE_SCREEN_CENTER.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_CENTER_TRANSPARENT.classList.add('display-hidden');
        THREE_PHONE_SCREEN_CENTER.classList.remove('display-hidden');
    };
});

THREE_PHONE_SCREEN_CENTER.addEventListener('click', (event) => {
    if(!event.target.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_CENTER.classList.add('display-hidden');
        THREE_PHONE_SCREEN_CENTER_TRANSPARENT.classList.remove('display-hidden');
    }
}); 

//----------------------------
// SLIDER_2_TASK: turning on phone (left) with button and screen
//----------------------------
const THREE_PHONE_BUTTON_LEFT = document.querySelector('.three-phone-button-left');
const THREE_PHONE_SCREEN_LEFT = document.querySelector('.three-phone-screen-left');
const THREE_PHONE_SCREEN_LEFT_TRANSPARENT = document.querySelector('.three-phone-screen-left-transparent');

THREE_PHONE_BUTTON_LEFT.addEventListener('click', (event) => {
    if(THREE_PHONE_SCREEN_LEFT.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_LEFT_TRANSPARENT.classList.add('display-hidden');
        THREE_PHONE_SCREEN_LEFT.classList.remove('display-hidden');
    } else if(!THREE_PHONE_SCREEN_LEFT.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_LEFT_TRANSPARENT.classList.remove('display-hidden');
        THREE_PHONE_SCREEN_LEFT.classList.add('display-hidden');
    };
});

THREE_PHONE_SCREEN_LEFT_TRANSPARENT.addEventListener('click', (event) => {
    if(THREE_PHONE_SCREEN_LEFT.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_LEFT_TRANSPARENT.classList.add('display-hidden');
        THREE_PHONE_SCREEN_LEFT.classList.remove('display-hidden');
    };
});

THREE_PHONE_SCREEN_LEFT.addEventListener('click', (event) => {
    if(!event.target.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_LEFT.classList.add('display-hidden');
        THREE_PHONE_SCREEN_LEFT_TRANSPARENT.classList.remove('display-hidden');
    };
});

//----------------------------
// SLIDER_2_TASK: turning on phone (right) with button and screen
//----------------------------
const THREE_PHONE_BUTTON_RIGHT = document.querySelector('.three-phone-button-right');
const THREE_PHONE_SCREEN_RIGHT = document.querySelector('.three-phone-screen-right');
const THREE_PHONE_SCREEN_RIGHT_TRANSPARENT = document.querySelector('.three-phone-screen-right-transparent');


THREE_PHONE_BUTTON_RIGHT.addEventListener('click', (event) => {
    if(THREE_PHONE_SCREEN_RIGHT.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_RIGHT_TRANSPARENT.classList.add('display-hidden');
        THREE_PHONE_SCREEN_RIGHT.classList.remove('display-hidden');
    } else if(!THREE_PHONE_SCREEN_RIGHT.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_RIGHT_TRANSPARENT.classList.remove('display-hidden');
        THREE_PHONE_SCREEN_RIGHT.classList.add('display-hidden');
    };
});

THREE_PHONE_SCREEN_RIGHT_TRANSPARENT.addEventListener('click', (event) => {
    if(THREE_PHONE_SCREEN_RIGHT.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_RIGHT_TRANSPARENT.classList.add('display-hidden');
        THREE_PHONE_SCREEN_RIGHT.classList.remove('display-hidden');
    };
});

THREE_PHONE_SCREEN_RIGHT.addEventListener('click', (event) => {
    if(!event.target.classList.value.includes('display-hidden')) {
        THREE_PHONE_SCREEN_RIGHT.classList.add('display-hidden');
        THREE_PHONE_SCREEN_RIGHT_TRANSPARENT.classList.remove('display-hidden');
    };
});