
class Card {
  constructor(data, templateSelector, handleOpenPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleOpenPopup = handleOpenPopup;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  _handleClickDelete() {
    this._element.remove();
    this._element = null;
  }

  _handleClickLike() {
    this._likeButton.classList.toggle('element__like-button_active');
  }

  _closePopupByEsc(evt) {
    if (evt.key === "Escape") {
      bigCardPopup.classList.remove('popup_opend');
    }
  }


  _setEventListeners() {

    const deleteCardButton = this._element.querySelector('.element__delete-button');
    deleteCardButton.addEventListener('click', () => {
      this._handleClickDelete();
    });

    this._likeButton = this._element.querySelector('.element__like-button');
    this._likeButton.addEventListener('click', () => {
      this._handleClickLike();
    });

    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__title').alt = this._name;

    return this._element;
  }
}

export default Card;