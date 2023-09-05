
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
export const popupDeleteElement = '.popup_type_confirm';
export const popupUpdateAvatar = '.popup_type_avatar';

// выбор элементов имени и описания профиля на основной странице
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';
export const profileAvatar = '.profile__avatar';
