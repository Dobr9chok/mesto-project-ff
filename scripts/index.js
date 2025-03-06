// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(element, deleteCard) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const deleteButton = document.querySelector('.card__delete-button');
  cardTitle.textContent = element.name;
  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(evt){ 
  const currentCard = evt.target.closest('.card'); 
  console.log(evt.target); 
  currentCard.remove(); 
}
// Не понял, как правильно оформить эту функцию удаления с пометкой "Можно лучше"

// @todo: Вывести карточки на страницу
initialCards.forEach(function(element) {
  placesList.append(createCard(element, deleteCard));
});
