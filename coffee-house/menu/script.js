// burger:
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav-container');
const navItems = headerNav.querySelectorAll('a');
const burger = document.getElementById('burger');
const body = document.body;
const headerMenuButton = document.querySelector('.header__link-menu');
const headerLogoLink = document.querySelector('.header__logo');

burger.addEventListener('click', () => {
  header.classList.toggle('active');
  body.classList.toggle('stop-scroll');
});

navItems.forEach(element => {
  element.addEventListener('click', () => {
    header.classList.remove('active');
    body.classList.remove('stop-scroll');
  });
});

headerMenuButton.addEventListener('click', () => {
  header.classList.remove('active');
  body.classList.remove('stop-scroll');
})

headerLogoLink.addEventListener('click', () => {
  header.classList.remove('active');
})

// Categories of products on the menu page:
const teaPicture = document.querySelectorAll('.menu__card-img');
const teaTitle = document.querySelectorAll('.menu__card-title');
const teaText = document.querySelectorAll('.menu__card-text');
const teaPrice = document.querySelectorAll('.menu__card-price');
const buttons = document.querySelectorAll('.menu__button');
const buttonImg = document.querySelectorAll('.button__img');
const menuCards = document.querySelectorAll('.menu__cards');
const buttonRefresh = document.querySelector('.menu__button-refresh');
const menuCardWrapper = document.querySelectorAll('.menu__card-wrapper');
const cardWapperHidden = document.querySelectorAll('.card-wrapper__hidden');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    buttons.forEach(element => {
      element.classList.remove('menu__button_active');
    });
    buttons[i].classList.add('menu__button_active');

    buttonImg.forEach(el => {
      el.classList.remove('button__img_active');
    })
    buttonImg[i].classList.add('button__img_active');

    for (let cards of menuCards) {
      cards.classList.remove('menu__cards_active');
      cards.classList.add('fadein');
    }
    menuCards[i].classList.add('menu__cards_active');

    if (i === 1) {
      buttonRefresh.classList.add('button-refresh__invisible');
    } else {
      buttonRefresh.classList.remove('button-refresh__invisible');
    }
    
    cardWapperHidden.forEach(el => {
      el.classList.add('card-wrapper__hidden');
    })
  })
}

buttonRefresh.addEventListener('click', () => {
  for (let item of cardWapperHidden) {
    item.classList.remove('card-wrapper__hidden');
    item.classList.add('fadein');
  }
  buttonRefresh.classList.add('button-refresh__invisible');
})
