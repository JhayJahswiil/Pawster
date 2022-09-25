// DOM ELEMENTS
const bars = document.querySelector('.fa-bars');
const mobileNav = document.querySelector('.mobile__nav--menu');

// DOM IMPLENTATION
bars.addEventListener('click', (e) => {
    mobileNav.classList.toggle('open')
})