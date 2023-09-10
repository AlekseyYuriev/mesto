import Popup from '../components/Popup.js';

export default class PopupWithConfirmation extends Popup{
  constructor(selector, {handleFormSubmit}) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._setEventListener = this._setEventListener.bind(this);
  }

  handleSubmitConfirm(SubmitConfirm) {
    this._handleFormSubmit = SubmitConfirm;
  }

  _setEventListener(evt) {
    evt.preventDefault();
    this._handleFormSubmit();
  }

  open() {
    super.open();
    this._form.addEventListener('submit', this._setEventListener);
  }

  close() {
    super.close();
  }
}
