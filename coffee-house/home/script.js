// burger:

const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav-container');
const navItems = headerNav.querySelectorAll('a');
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

// Implementation of the carousel:

const carousel = document.querySelector('.favourites__carousel');
const slides = document.querySelector('.favourites__slides');
const images = slides.querySelectorAll('img');
const btnLeft = document.querySelector('.favourites__arrow-left');
const btnRight = document.querySelector('.favourites__arrow-right');
let carouselWidth;
let carouselCount = 0;

// делаем слайдер адаптивным:
window.addEventListener('resize', calculateWidth);
function calculateWidth() {
  carouselWidth = carousel.offsetWidth;
  slides.style.width = carouselWidth*images.length + 'px';
  images.forEach(element => {
    element.style.width = carouselWidth + 'px';
  });
  slideMovementDistamce();
}
calculateWidth();

// функции перелистывания слайдов вперед и назад:
function nextSlide() {
  carouselCount++;
  if (carouselCount >= images.length) {
    carouselCount = 0;
  }
  slideMovementDistamce();
}

function prevSlide() {
  carouselCount--;
  if (carouselCount < 0) {
    carouselCount = images.length - 1;
  }
  slideMovementDistamce();
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// расстояние перемещения слайдов:
function slideMovementDistamce() {
  slides.style.transform = `translateX(${-carouselCount * carouselWidth}px)`;
}