
const VALIDATION_CONFIG = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  buttonElement: '.popup__save-button',
  disabledButtonElement: 'popup__save-button_disabled',
  inputErrorElement: 'popup__input_type_error',
  errorElement: 'popup__input-error'
};

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorElement);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorElement);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorElement);
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
  const buttonElement = formElement.querySelector(config.buttonElement);

  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);

      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formElement));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault;
    });
    setEventListeners(formElement, config);
  });
};

enableValidation(VALIDATION_CONFIG);

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {

    return !inputElement.validity.valid;
  })
};

function toggleButtonState (inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    disableButton (buttonElement, config);
  } else {
    enableButton (buttonElement, config);
  }
}

function disableButton (buttonElement, config) {
  buttonElement.classList.add(config.disabledButtonElement);
  buttonElement.disabled = true;
};

function enableButton (buttonElement, config) {
  buttonElement.classList.remove(config.disabledButtonElement);
  buttonElement.disabled = false;
};

