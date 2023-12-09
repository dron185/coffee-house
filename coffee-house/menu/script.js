// Categories of products on the menu page:
const teaPicture = document.querySelectorAll('.menu__card-img');
const teaTitle = document.querySelectorAll('.menu__card-title');
const teaText = document.querySelectorAll('.menu__card-text');
const teaPrice = document.querySelectorAll('.menu__card-price');
const buttons = document.querySelectorAll('.menu__button');
const buttonImg = document.querySelectorAll('.button__img');
const menuCards = document.querySelectorAll('.menu__cards');

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
    }
    menuCards[i].classList.add('menu__cards_active');
  })
}
