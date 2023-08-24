
import {
  initialCards,
  bigCardPopup,
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

// выбор элементов, которые взаимодействуют с popup и формой
const editButtonElement = document.querySelector('.profile__edit-button');
const formEditElement = document.querySelector('.popup__form_type_edit')

const addButtonElement = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.popup__form_type_add');

const profileNameInputElement = document.querySelector('.popup__input_type_name');
const profileDescriptionInputElement = document.querySelector('.popup__input_type_description');

const userInfo = new UserInfo({profileName, profileDescription});

const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const cardElement = createCard(cardItem);
    cardList.addItem(cardElement);
  },
},
sectionElement
);

cardList.renderItems(initialCards);

// отдельная функция создания карточки
function createCard (item) {
  const card = new Card(item, '.card-template', handleCardClick);
  return card.generateCard();
};

const bigPopup = new PopupWithImage(bigCardPopup);
bigPopup.setEventListeners();

function handleCardClick(name, link) {
  bigPopup.open(name, link);
}

const editPopup = new PopupWithForm(popupEditElement, (formData) => {
  userInfo.setUserInfo(formData);
  editPopup.close();
})

editButtonElement.addEventListener('click', () => {
  popupEditElementValidate.resetValidation();

  const currentUserInfo = userInfo.getUserInfo();
  profileNameInputElement.value = currentUserInfo.userName;
  profileDescriptionInputElement.value = currentUserInfo.userDescription;

  editPopup.open();
})

editPopup.setEventListeners();

const addCardPopup = new PopupWithForm(popupAddCardElement, (formData) => {
  const cardElement = createCard(formData);
  cardList.addItem(cardElement);
  addCardPopup.close();
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
