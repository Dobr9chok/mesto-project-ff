// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const resetButton = document.querySelector('.card__delete-button');

// @todo: Функция создания карточки
function createCard(element) {
  const cardElement = cardTemplate.cloneNode(true);
  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(evt){
  const currentCard = evt.target.closest('.card');
  console.log(evt.target);
  currentCard.remove();
}
// @todo: Вывести карточки на страницу

initialCards.forEach(function(element){
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  cardTitle.textContent = element.name;
  cardImage.src = element.link;
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  placesList.append(cardElement);
});