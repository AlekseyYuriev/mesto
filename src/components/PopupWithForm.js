import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._selector.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  //приватый метод, который собирает данные всех полей формы
  _getInputValues() {
    this._formValues = {}
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());

      this.close();
    })
  }

  close(){
    super.close();
    this._form.reset();
  }
}

