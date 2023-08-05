
class FormValidator {
  constructor(config, currentForm) {
    this._formElement = config.formElement;
    this._inputElement = config.inputElement;
    this._disabledButtonElement = config.disabledButtonElement;
    this._inputErrorElement = config.inputErrorElement;
    this._errorElement = config.errorElement;
    this._inputList = Array.from(currentForm.querySelectorAll(config.inputElement));
    this._buttonElement = config.buttonElement;
    this._currentForm = currentForm;
    this._currentButton = currentForm.querySelector(config.buttonElement);
  }

//метод, проверяющий валидность поля

_isValid(inputElement) {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement);
  } else {
    this._hideInputError(inputElement);
  }
};

//метод, который показывает элемент ошибки

_showInputError(inputElement) {
  const errorElement = this._currentForm.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorElement);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(this._errorElement);
}

//метод, который скрывает элемент ошибки

_hideInputError(inputElement) {
  const errorElement = this._currentForm.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorElement);
  errorElement.textContent = '';
}

//метод, который проверяет валидность всех полей

_hasInvalidInput() {
  return this._inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}

//метод, который будет блокировать кнопку "submit" при наличии невалидных полей

_toggleButtonState() {
  if (this._hasInvalidInput()) {
    this.disableButton();
  } else {
    this._enableButton();
  }
}

//Публичный метод для очистки ошибок в форме

resetValidation() {
  this.disableButton(this._buttonElement);

  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  });
}

//Публичный метод, блокирующий кнопку "submit"

disableButton() {
  this._currentButton.classList.add(this._disabledButtonElement);
  this._currentButton.disabled = true;
}

//метод, активирующий кнопку "submit"

_enableButton() {
  this._currentButton.classList.remove(this._disabledButtonElement);
  this._currentButton.disabled = false;
}

//метод, который добавит обработчик всем полям формы

_setEventListeners() {

  this._toggleButtonState();

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._isValid(inputElement);
      this._toggleButtonState();
    });
  });
}

//публичный метод, который найдёт на странице и обработает все формы

enableValidation(currentForm) {
  this._setEventListeners(currentForm);
}
}

export default FormValidator;
