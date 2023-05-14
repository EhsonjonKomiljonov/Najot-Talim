const modeToggler = document.querySelector('.header-top-mode');
const body = document.querySelector('body');

modeToggler.addEventListener('click', () => {
  body.classList.toggle('dark');
});

const modeTogglerMobile = document.querySelector('#header-top-mode');

if (localStorage.getItem('mode') == 'dark') {
  body.classList.add('dark');
}
modeToggler.addEventListener('click', () => {
  if (localStorage.getItem('mode') == 'light') {
    localStorage.setItem('mode', 'dark');
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('mode', 'light');
  }
});
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.menu-close');
const menu = document.querySelector('.nav-mobile');

openMenu.addEventListener('click', () => {
  menu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
});
