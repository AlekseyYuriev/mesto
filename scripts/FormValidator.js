
class FormValidator {
  constructor(config, currentForm) {
    this._formElement = config.formElement;
    this._inputElement = config.inputElement;
    this._buttonElement = config.buttonElement;
    this._disabledButtonElement = config.disabledButtonElement;
    this._inputErrorElement = config.inputErrorElement;
    this._errorElement = config.errorElement;
    this._currentForm = currentForm;
  }

//метод, проверяющий валидность поля

_isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    this._showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    this.hideInputError(formElement, inputElement);
  }
};

//метод, который показывает элемент ошибки

_showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorElement);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorElement);
}

//Публичный метод, который скрывает элемент ошибки

hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorElement);
  errorElement.textContent = '';
}

//метод, который проверяет валидность всех полей

_hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

//метод, который будет блокировать кнопку "submit" при наличии невалидных полей

_toggleButtonState(inputList, buttonElemet) {
  if (this._hasInvalidInput(inputList)) {
    this.disableButton(buttonElemet);
  } else {
    this._enableButton(buttonElemet);
  }
}

//Публичный метод, блокирующий кнопку "submit"

disableButton(buttonElement) {
  buttonElement.classList.add(this._disabledButtonElement);
  buttonElement.disabled = true;
}

//метод, активирующий кнопку "submit"

_enableButton(buttonElemet) {
  buttonElemet.classList.remove(this._disabledButtonElement);
  buttonElemet.disabled = false;
}

//метод, который добавит обработчик всем полям формы

_setEventListeners(formElement) {

  const inputList = Array.from(formElement.querySelectorAll(this._inputElement));
  const buttonElement = formElement.querySelector(this._buttonElement);

  this._toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._isValid(formElement, inputElement);
      this._toggleButtonState(inputList, buttonElement);
    });
  });
}

//публичный метод, который найдёт на странице и обработает все формы

enableValidation() {
  const formList = Array.from(document.querySelectorAll(this._formElement));

  formList.forEach((formElement) => {
    this._setEventListeners(formElement);
  });
}
}

export default FormValidator;
