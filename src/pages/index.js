
import {
  initialCards,
  bigCardPopup,
  editButtonElement,
  addButtonElement,
  formEditElement,
  formAddElement,
  sectionElement,
  VALIDATION_CONFIG,
  popupAddCardElement,
  profileName,
  profileDescription,
  popupEditElement,
} from '../utils/constants.js';

import '../pages/index.css'

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';


const userInfo = new UserInfo({profileName, profileDescription});

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

const editPopup = new PopupWithForm(popupEditElement, (formData) => {
  userInfo.setUserInfo(formData);
})

editButtonElement.addEventListener('click', () => {
  popupEditElementValidate.resetValidation();
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
  popupAddCardElementValidated.resetValidation();
  addCardPopup.open();
})

const popupEditElementValidate = new FormValidator(VALIDATION_CONFIG, formEditElement);
popupEditElementValidate.enableValidation();


const popupAddCardElementValidated = new FormValidator(VALIDATION_CONFIG, formAddElement);
popupAddCardElementValidated.enableValidation();
