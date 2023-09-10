
import {
  bigCardPopup,
  sectionElement,
  VALIDATION_CONFIG,
  popupAddCardElement,
  profileName,
  profileDescription,
  profileAvatar,
  popupEditElement,
  popupDeleteElement,
  popupUpdateAvatar
} from '../utils/constants.js';

import '../pages/index.css'

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

// выбор элементов, которые взаимодействуют с popup и формой
const editButtonElement = document.querySelector('.profile__edit-button');
const formEditElement = document.querySelector('.popup__form_type_edit')

const addButtonElement = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.popup__form_type_add');

const profileNameInputElement = document.querySelector('.popup__input_type_name');
const profileDescriptionInputElement = document.querySelector('.popup__input_type_description');

const updateButtonElement = document.querySelector('.profile__edit-avatar-button');
const formUpdateAvatarElement = document.querySelector('.popup__form_type_update');

//создаём экземпляр класса Api
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-74",
  headers: {
    authorization: 'dff3a039-c715-4449-a69c-ffa6fb6a81fb',
    'Content-Type': 'application/json',
  }
})

//объявляем переменную userId в глобальной области видимости
let userId;

//создаём экземпляр класса UserInfo
const userInfo = new UserInfo({profileName, profileDescription, profileAvatar});

//создаём экземпляр класса Section
const cardList = new Section({
  renderer: (cardItem) => {
    const cardElement = createCard(cardItem);
    cardList.addItem(cardElement);
  },
},
sectionElement
);

// отдельная функция создания карточки
const createCard = (data) => {
  const card = new Card({
    data, userId,
    handleCardClick: () => {
      bigPopup.open(data.name, data.link);
    },

    handleDeleteClick: () => {
      confirmationPopup.open();
      confirmationPopup.handleSubmitConfirm(() => {
        api.deleteCard(card._id)
          .then(() => {
            card.removeCard();
            confirmationPopup.close();
          })
          .catch((err) => {
            console.log(err);
          })
      })
    },

    handleCardLike: () => {
      if (card.isLiked()) {
        api.deleteLike(card._id)
          .then((data) => {
            card.deleteLike();
            card.setLike(data.likes);
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        api.setLike(card._id)
          .then((data) => {
            card.addLike();
            card.setLike(data.likes);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  },
  '.card-template');
  return card.generateCard();
}

//позле возвращения данных с сервера по двум запросам отображаем данные профиля и отрисовываем карточки
Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userId = userData._id;

    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);

    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  })

//создам экземпляр класса попапа с формой редактирования профиля
const editPopup = new PopupWithForm(popupEditElement, {
  handleFormSubmit: (formData) => {
    editPopup.waitingForResponse(true);
    api.setUserData(formData)
      .then((res) => {
        userInfo.setUserInfo(res);
        editPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        editPopup.waitingForResponse(false);
      })
  }
})

//добавляем слушатель по клику на кнопку открытия попапа редактирования профиля
editButtonElement.addEventListener('click', () => {
  popupEditElementValidate.resetValidation();

  const currentUserInfo = userInfo.getUserInfo();
  profileNameInputElement.value = currentUserInfo.userName;
  profileDescriptionInputElement.value = currentUserInfo.userDescription;

  editPopup.open();
})

//добавляем слушатели на попап редактирования профиля
editPopup.setEventListeners();

//создаём экземпляр класса попапа с формой добавления новой карточки
const addCardPopup = new PopupWithForm(popupAddCardElement, {
  handleFormSubmit: (formData) => {
    addCardPopup.waitingForResponse(true);
    api.createNewCard(formData)
      .then((res) => {
        const cardElement = createCard(res);
        cardList.addItem(cardElement);
        addCardPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        addCardPopup.waitingForResponse(false);
      })
  }
})

//добавляем слушатель по клику на кнопку открытия попапа добавления новой карточки
addButtonElement.addEventListener('click', () => {
  popupAddCardElementValidated.resetValidation();
  addCardPopup.open();
})

//добавляем слушатели на попап добавления новой карточки
addCardPopup.setEventListeners();

//создаём экземпляр класса попапа с увеличенной картинкой
const bigPopup = new PopupWithImage(bigCardPopup);

//добавляем слушатели на попап с увеличенной картинкой
bigPopup.setEventListeners();

//создаём экземпляр класса попапа с запросом подтверждения для удаления карточки
const confirmationPopup = new PopupWithConfirmation(popupDeleteElement, {
  handleFormSubmit: (formData) => {
    confirmationPopup.waitingForResponse(true);
    api.deleteCard(formData)
      .then(() => {
        confirmationPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        confirmationPopup.waitingForResponse(false);
      })
  }
})

//добавляем слушатели на попап с запросом подтверждения для удаления карточки
confirmationPopup.setEventListeners();

//создаём экземпляр класса попапа редактирования аватара
const updateAvatarPopup = new PopupWithForm(popupUpdateAvatar, {
  handleFormSubmit: (formData) => {
    updateAvatarPopup.waitingForResponse(true);
    api.updateAvatar(formData)
      .then((data) => {
        userInfo.setUserAvatar(data);
        updateAvatarPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        updateAvatarPopup.waitingForResponse(false);
      })
  }
})

//добавляем слушатели на попап редактирования аватара
updateAvatarPopup.setEventListeners();

//добавляем слушатель по клику на кнопку открытия попапа редактирования аватара
updateButtonElement.addEventListener('click', () => {
  popupUpdateAvatarValidated.resetValidation();

  updateAvatarPopup.open();
})

//подключаем валидацию форм
const popupEditElementValidate = new FormValidator(VALIDATION_CONFIG, formEditElement);
popupEditElementValidate.enableValidation();

const popupAddCardElementValidated = new FormValidator(VALIDATION_CONFIG, formAddElement);
popupAddCardElementValidated.enableValidation();

const popupUpdateAvatarValidated = new FormValidator(VALIDATION_CONFIG, formUpdateAvatarElement);
popupUpdateAvatarValidated.enableValidation();
