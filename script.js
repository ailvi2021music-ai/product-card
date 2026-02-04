const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstCatalogCard = document.querySelector('.product-card')
const blueHashColor = '#0000FF';

recolorFirstCardButton.addEventListener('click', () => {
  firstCatalogCard.style.backgroundColor = blueHashColor;
})
const greenHashColor = '#00ff44';
const catalogCards = document.querySelectorAll('.product-card');
const recolorAllCardsButton = document.getElementById('recolor-all-cards-button');

recolorAllCardsButton.addEventListener('click', () => {
  catalogCards.forEach (
    card => card.style.backgroundColor = greenHashColor
  )
})

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?')
  
  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователей отменил переход на Google')
  }
  }

  //Выведение текстового контента h1

const title = document.querySelector('.title');
title.addEventListener('mouseenter', () => {
  console.log(title.textContent)
});

//Кнопка меняющая свой цвет

const changeColorButton = document.getElementById('change-color-btn-button');
changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('active')
})