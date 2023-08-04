// выбираем элементы картинки для реализации всплывающего окна с фото

const bigCardImage = document.querySelector('.popup__image');
const bigCardTitle = document.querySelector('.popup__card-name');
const bigCardPopup = document.querySelector('.popup_type_bigcard');
const bigCardCloseButton = document.querySelector('.popup__close-button');

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
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
  }

  _handleClickLike() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

  _handleOpenPopup() {
    bigCardImage.src = this._link;
    bigCardImage.alt = this._name;
    bigCardTitle.textContent = this._name;
    bigCardPopup.classList.add('popup_opend');
    document.addEventListener('keydown', this._closePopupByEsc);
  }

  _handleClosePopup() {
    bigCardImage.src = '';
    bigCardPopup.classList.remove('popup_opend');
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

    const likeButton = this._element.querySelector('.element__like-button');
    likeButton.addEventListener('click', () => {
      this._handleClickLike();
    });

    const cardImage = this._element.querySelector('.element__image');
    cardImage.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    bigCardCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }
}

export default Card;
