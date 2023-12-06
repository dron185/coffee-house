// burger
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav-container');
const navItems = document.querySelectorAll('a');
const burger = document.getElementById('burger');
const body = document.body;

burger.addEventListener('click', () => {
  header.classList.toggle('active');
  body.classList.add('stop-scroll');
});

navItems.forEach(element => {
  element.addEventListener('click', () => {
    header.classList.remove('active');
    body.classList.remove('stop-scroll');
  });
});