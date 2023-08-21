// создаём исходный массив с данными для карточек
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//настройки для вызова валидации
export const VALIDATION_CONFIG = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  buttonElement: '.popup__save-button',
  disabledButtonElement: 'popup__save-button_disabled',
  inputErrorElement: 'popup__input_type_error',
  errorElement: 'popup__input-error'
};

// выбираем секцию для добавления карточек
//export const sectionElement = document.querySelector('.elements');
export const sectionElement = '.elements';

// выбор элементов, которые взаимодействуют с popup и формой
export const editButtonElement = document.querySelector('.profile__edit-button');
export const popupEditElement = document.querySelector('.popup_type_edit');
export const formEditElement = document.querySelector('.popup__form_type_edit')
export const formEditSelector = '.popup_type_edit';

export const nameInput = document.querySelector('.popup__input_type_name');
export const descriptionInput = document.querySelector('.popup__input_type_description');

export const addButtonElement = document.querySelector('.profile__add-button');
export const popupAddCardElement = document.querySelector('.popup_type_add');
export const formAddElement = document.querySelector('.popup__form_type_add');

// выбор элементов полей ввода в попапе для добавления карточек
export const cardName = document.querySelector('.popup__input_type_card-name');
export const cardLink = document.querySelector('.popup__input_type_link');

// выбор элементов имени и описания профиля на основной странице
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');

// выбираем элементы картинки для реализации всплывающего окна с фото
export const bigCardImage = document.querySelector('.popup__image');
export const bigCardTitle = document.querySelector('.popup__card-name');
export const bigCardPopup = document.querySelector('.popup_type_bigcard');

// выберем все кнопки закрытия попапов
export const closeButton = document.querySelectorAll('.popup__close-button');

//выберем все попапы на странице и сразу представим их в виде массива
export const popupList = Array.from(document.querySelectorAll('.popup'));
