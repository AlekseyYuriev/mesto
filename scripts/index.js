import Card from './Card.js';
import FormValidator from './FormValidator.js';

// создаём исходный массив с данными для карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//настройки для вызова валидации
const VALIDATION_CONFIG = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  buttonElement: '.popup__save-button',
  disabledButtonElement: 'popup__save-button_disabled',
  inputErrorElement: 'popup__input_type_error',
  errorElement: 'popup__input-error'
};

// выбираем секцию для добавления карточек
const sectionElement = document.querySelector('.elements');

// выбор элементов, которые взаимодействуют с popup и формой
const editButtonElement = document.querySelector('.profile__edit-button');
const popupEditElement = document.querySelector('.popup_type_edit');
const formEditElement = document.querySelector('.popup__form_type_edit')

const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');

const addButtonElement = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.popup_type_add');
const formAddElement = document.querySelector('.popup__form_type_add');

// выбор элементов полей ввода в попапе для добавления карточек
const cardName = document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_link');

// выбор элементов имени и описания профиля на основной странице
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// выбираем элементы картинки для реализации всплывающего окна с фото

const bigCardImage = document.querySelector('.popup__image');
const bigCardTitle = document.querySelector('.popup__card-name');
const bigCardPopup = document.querySelector('.popup_type_bigcard');

// отдельная функция создания карточки
const createCard = (item) => {
  const card = new Card(item, '.card-template', handleOpenPopup);
  return card.generateCard();
};

// добавляем карточки на страницу с помощью данных из массива
initialCards.forEach((item) => {
  sectionElement.append(createCard(item));
});

// универсальная функция открытия popup
function openPopup(e) {
  e.classList.add('popup_opend');
  //добавляем слушатель события с функцией закрытия попапа по клавише esc
  document.addEventListener('keydown', closePopupByEsc);
}

// функция, отвечающая за открытие попапа с увеличенной картинкой

function handleOpenPopup(name, link) {
  bigCardImage.src = link;
  bigCardImage.alt = name;
  bigCardTitle.textContent = name;
  openPopup(bigCardPopup);
}

// вешаем обработчик события по клику на кнопки открытия попапов с функцией колбэком
editButtonElement.addEventListener('click', () => {

  popupEditElementValidate.resetValidation();

  // для попапа редактирования профиля переносим имя и описание в поля ввода
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(popupEditElement);
});

addButtonElement.addEventListener('click', () => {

  popupAddCardElementValidated.resetValidation();

  // для попапа добавления карточек оставляем пустыми поля названия карточки и ссылки
  formAddElement.reset();

  openPopup(popupAddCardElement);
});

// функция закрытия popup

function closePopup(e) {
    e.classList.remove('popup_opend');
    //удаляем слушатель события с функцией закрытия попапа по клавише esc при закрытии попапа
    document.removeEventListener('keydown', closePopupByEsc);
}

// выберем все кнопки закрытия попапов

const closeButton = document.querySelectorAll('.popup__close-button');

// добавим слушатель события с функцией закрытия попапа каждой кнопке

closeButton.forEach(button => {
  const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
});

// функция, присваивающая новые значения имени и описания профиля через popup

function handleEditFormSubmit(evt) {
  // отмена стандартной отправки формы
  evt.preventDefault();

  // Присваиваем значения полей nameInput и descriptionInput из свойства value
  // нужным элементам (profileName и profileDescription) с помощью textContent

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  // Добавляем функцию закрытия popup

  closePopup(popupEditElement);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка» для формы редактирования профиля
formEditElement.addEventListener('submit', handleEditFormSubmit);

// Функция добавления новых карточек на страницу

const handleAddFormSubmit = (e) => {
  // отмена стандартной отправки формы
  e.preventDefault();

  // сохраняем в константы данные, которые передаём из полей ввода в фукцию рендеринга карточек
  const name = cardName.value;
  const link = cardLink.value;

  // вызываем функцию создания карточки и добавляем в начало списка на странице
  sectionElement.prepend(createCard({name, link}));

  // добавляем функцию закрытия попапа после добавления новой карточки
  closePopup(popupAddCardElement);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка» для формы создания карточек
formAddElement.addEventListener('submit', handleAddFormSubmit);

//выберем все попапы на странице и сразу представим их в виде массива
const popupList = Array.from(document.querySelectorAll('.popup'));

//универсальная функция закрытия всех попапов по клику на оверлэй

const closePopupByOverlay = () => {
  popupList.forEach((popupItem) => {
    popupItem.addEventListener('mousedown', function(evt) {
      if (evt.target === evt.currentTarget) {
        closePopup(popupItem);
      }
    });
  });
}

closePopupByOverlay();

//универсальная функция закрытия всех попапов по клавише esc

function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opend');
    closePopup(openedPopup);
  }
}

const popupEditElementValidate = new FormValidator(VALIDATION_CONFIG, formEditElement);
popupEditElementValidate.enableValidation();


const popupAddCardElementValidated = new FormValidator(VALIDATION_CONFIG, formAddElement);
popupAddCardElementValidated.enableValidation();
