
import {
  initialCards,
  bigCardImage,
  bigCardTitle,
  bigCardPopup,
  editButtonElement,
  addButtonElement,
  closeButton,
  formEditElement,
  formAddElement,
  popupList,
  sectionElement,
  VALIDATION_CONFIG,
  popupAddCardElement,
  nameInput,
  descriptionInput,
  profileName,
  profileDescription,
  popupEditElement,
  formEditSelector,
  cardName,
  cardLink,
} from '../utils/constants.js';

import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';

import '../pages/index.css'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const userInfo = new UserInfo(profileName, profileDescription);
console.log(userInfo.getUserInfo())

const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, '.card-template', handleCardClick);
    const cardElement = card.generateCard();

    cardList.addItem(cardElement);
  },
},
sectionElement
);

cardList.renderItems();

const bigPopup = new PopupWithImage(bigCardPopup);
bigPopup.setEventListeners();

function handleCardClick(name, link) {
  bigPopup.open(name, link);
}

const editPopup = new PopupWithForm(popupEditElement, () => {
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  editPopup.close();
})
editButtonElement.addEventListener('click', () => {
  editPopup.open();
})
editPopup.setEventListeners();

const addCardPopup = new PopupWithForm(popupAddCardElement, (formData) => {
  const card = new Card(formData, '.card-template', handleCardClick);
  const cardElement = card.generateCard();

  cardList.addItem(cardElement);
})

addCardPopup.setEventListeners();

addButtonElement.addEventListener('click', () => {
  addCardPopup.open();
})

const popupEditElementValidate = new FormValidator(VALIDATION_CONFIG, formEditElement);
popupEditElementValidate.enableValidation();


const popupAddCardElementValidated = new FormValidator(VALIDATION_CONFIG, formAddElement);
popupAddCardElementValidated.enableValidation();

// const editPopup = new PopupWithForm(popupEditElement, handleEditFormSubmit);
// editButtonElement.addEventListener('click', () => {
//   editPopup.open();
// })
// editPopup.setEventListeners();


// const addCardPopup = new PopupWithForm(popupAddCardElement, handleAddFormSubmit);
// addButtonElement.addEventListener('click', () => {
//   addCardPopup.open();
// })
// addCardPopup.setEventListeners();
// addCardPopup._getInputValues();

// function handleEditFormSubmit() {

//   // Присваиваем значения полей nameInput и descriptionInput из свойства value
//   // нужным элементам (profileName и profileDescription) с помощью textContent
//   profileName.textContent = nameInput.value;
//   profileDescription.textContent = descriptionInput.value;
//   editPopup.close();
// }

// function handleAddFormSubmit() {

//     // сохраняем в константы данные, которые передаём из полей ввода в фукцию рендеринга карточек
//     const name = cardName.value;
//     const link = cardLink.value;

//     // вызываем функцию создания карточки и добавляем в начало списка на странице
//     sectionElement.prepend(createCard({name: input link}));
// }













/*
// функция закрытия popup

function closePopup(e) {
  e.classList.remove('popup_opend');
  //удаляем слушатель события с функцией закрытия попапа по клавише esc при закрытии попапа
  //document.removeEventListener('keydown', closePopupByEsc);
}

// функция, присваивающая новые значения имени и описания профиля через popup

function handleEditFormSubmit() {
  // отмена стандартной отправки формы
  //evt.preventDefault();

  // Присваиваем значения полей nameInput и descriptionInput из свойства value
  // нужным элементам (profileName и profileDescription) с помощью textContent

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  // Добавляем функцию закрытия popup

  //closePopup(popupEditElement);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка» для формы редактирования профиля
//formEditElement.addEventListener('submit', handleEditFormSubmit);

// Функция добавления новых карточек на страницу
*/


// const handleAddFormSubmit = (e) => {
//   // отмена стандартной отправки формы
//   e.preventDefault();

//   // сохраняем в константы данные, которые передаём из полей ввода в фукцию рендеринга карточек
//   const name = cardName.value;
//   const link = cardLink.value;

//   // вызываем функцию создания карточки и добавляем в начало списка на странице
//   sectionElement.prepend(createCard({name, link}));

//   // добавляем функцию закрытия попапа после добавления новой карточки
//   closePopup(popupAddCardElement);
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка» для формы создания карточек
// formAddElement.addEventListener('submit', handleAddFormSubmit);
