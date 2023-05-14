

const dataJobs = [
  {
    src: './images/epam.svg',
  },
  {
    src: './images/itechart.svg',
  },
  {
    src: './images/humo.svg',
  },
  {
    src: './images/agrobank.svg',
  },
  {
    src: './images/davrbank.svg',
  },
  {
    src: './images/texnomart.svg',
  },
  {
    src: './images/soliq.svg',
  },
  {
    src: './images/uzcard.svg',
  },
  {
    src: './images/my-taxi.svg',
  },
  {
    src: './images/mfaktor.svg',
  },
  {
    src: './images/jafton.svg',
  },
  {
    src: './images/fido-studio.svg',
  },
  {
    src: './images/osmondagi-bolalar.svg',
  },
  {
    src: './images/islom-uz.svg',
  },
  {
    src: './images/cambridge.svg',
  },
  {
    src: './images/kunuz.svg',
  },
  {
    src: './images/yoshlar-ishlari.svg',
  },
  {
    src: './images/pcg.svg',
  },
];

const jobsList = document.querySelector('.jobs__list');

const renderJobs = () => {
  for (el of dataJobs) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', el.src);
    li.appendChild(img);
    jobsList.appendChild(li);
    console.log(li);
  }
};

renderJobs();



const modeToggler = document.querySelector('.header-top-mode');
const body = document.querySelector('body');

modeToggler.addEventListener('click', () => {
  body.classList.toggle('dark');
});


const modeTogglerMobile = document.querySelector('#header-top-mode');

modeTogglerMobile.addEventListener('click', () => {
  body.classList.toggle('dark');
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
