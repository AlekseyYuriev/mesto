
export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._selectorCloseButton = this._selector.querySelector('.popup__close-button');
  }

  open() {
    this._selector.classList.add('popup_opend');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this._selector.classList.remove('popup_opend');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._selector.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    })

    this._selectorCloseButton.addEventListener('click', () => {
      this.close();
    })
  }
}
