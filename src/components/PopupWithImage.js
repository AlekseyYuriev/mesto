import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = this._popup.querySelector('.popup__image');
    this._cardName = this._popup.querySelector('.popup__card-name');
  }

  open(name, link) {
    this._image.src = link;
    this._image.alt = name;
    this._cardName.textContent = name;

    super.open();
  }
}
