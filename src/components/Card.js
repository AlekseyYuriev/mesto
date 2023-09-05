
export default class Card {
  constructor({data, userId, handleCardClick, handleDeleteClick, handleCardLike}, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;

    this._templateSelector = templateSelector;

    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleCardLike = handleCardLike;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _hideDeleteButton() {
    if (this._ownerId !== this._userId) {
      this._deleteCardButton.remove();
    }
  }

  isLiked() {
    return this._likes.find((user) => user._id === this._userId);
  }

  _checkOwnLike() {
    if (this.isLiked()) {
      this.addLike();
    } else {
      this.deleteLike();
    }
  }

  setLike(data) {
    this._likes = data;
    this._likesAmount.textContent = this._likes.length;
  }

  addLike = () => {
    this._likeButton.classList.add('element__like-button_active');
  }

  deleteLike = () => {
    this._likeButton.classList.remove('element__like-button_active');
  }

  _setEventListeners() {

    this._deleteCardButton = this._element.querySelector('.element__delete-button');
    this._deleteCardButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });

    this._likeButton = this._element.querySelector('.element__like-button');
    this._likeButton.addEventListener('click', () => {
      this._handleCardLike();
    });

    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likesAmount = this._element.querySelector('.element__like-number');

    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__title').alt = this._name;

    this._hideDeleteButton();

    this.setLike(this._likes);

    this._checkOwnLike();

    return this._element;
  }
}
