

const modeToggler = document.querySelector('.header-top-mode');
const body = document.querySelector('body');

modeToggler.addEventListener('click', () => {
    body.classList.toggle('dark')
})