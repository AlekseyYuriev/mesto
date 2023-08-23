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
export const sectionElement = '.elements';

// выбираем селекторы попапов для передачи в конструкторы классов
export const popupEditElement = '.popup_type_edit';
export const popupAddCardElement = '.popup_type_add';
export const bigCardPopup = '.popup_type_bigcard';

// выбор элементов имени и описания профиля на основной странице
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';
