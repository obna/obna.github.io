const bodyElement = document.querySelector('body');
const menuToggle = document.querySelector('.hamburger-menu');

menuToggle.addEventListener('click', function(){
    bodyElement.classList.toggle('is-open');
});