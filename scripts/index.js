
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

// выбираем элемент template для последующего наполнения данными из массива и секцию для добавления карточек

const templateElement = document.querySelector('.card-template');
const sectionElement = document.querySelector('.elements');

// функция для создания карточек

const createCard = ({name, link}) => {

  const clone = templateElement.content.cloneNode(true);
  const cardElement = clone.querySelector('.element');
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__image').alt = name;

  return cardElement;
}

// добавляем карточки с помощью данных из массива

initialCards.forEach((item) => {
  const newCard = createCard(item);
  sectionElement.append(newCard);
});

// выбор элементов, которые взаимодействуют с popup и формой

const editButtonElement = document.querySelector('.profile__edit-button');
const popupProfileCloseButton = document.querySelector('.popup__close-button_type_profile');
const popupEditElement = document.querySelector('.popup_type_edit');

const formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let descriptionInput = document.querySelector('.popup__input_type_description');

const addButtonElement = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.popup_type_add');
const popupCardCloseButton = document.querySelector('.popup__close-button_type_card');

// выбор элементов имени и описания профиля на основной странице

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

// выбор элементов полей ввода в попапе для добавления карточек

let cardName = document.querySelector('.popup__input_type_card-name');
let cardLink = document.querySelector('.popup__input_type_link');

// функция открытия popup с условиями для разных попапов

function openPopup(e) {
  e.classList.add('popup_opend');
  // для редактирования профиля переносим имя и опиание в поля ввода
  if (e === popupEditElement) {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  } else {
    // для добавления карточек оставляем поля ввода пустыми
    cardName.value = '';
    cardLink.value = '';
  }
}

// вешаем обработчик события по клику на кнопки открытия попапов с функцией колбэком

editButtonElement.addEventListener('click', () => openPopup(popupEditElement));
addButtonElement.addEventListener('click', () => openPopup(popupAddCardElement));

// функция закрытия popup

function closePopup(e) {
  e.classList.remove('popup_opend');
}

// вешаем обработчик события по клику на кнопки закрытия попапов с функцией колбэком

popupProfileCloseButton.addEventListener('click', () => closePopup(popupEditElement));
popupCardCloseButton.addEventListener('click', () => closePopup(popupAddCardElement));


/*
const handleSubmit = (e) => {
  e.preventDefault();

  const link = null;
  const name = null;
  const newCard = createCard({name, link});
  sectionElement.append(newCard);
}


const addButtonElement = document.querySelector('.profile__add-button');
const popupAddElement = document.querySelector('.popup_type_add');

addButtonElement.addEventListener('click', () => {
  popupAddElement.classList.add('popup_opend');
})

function closeEditProfilePopup(e) {
  const eventTarget = e.target;
  popupElement.classList.remove('popup_opend');
}

popupCloseButtonElement.addEventListener('click', () => closeEditProfilePopup(e));
*/

/*

// функция закрытия popup

function closeEditProfilePopup() {

  popupElement.classList.remove('popup_opend');
}

popupCloseButtonElement.addEventListener('click', closeEditProfilePopup);

// функция, присваивающая новые значения имени и описания профиля через popup

function handleFormSubmit(evt) {
  // отмена стандартной отправки формы
  evt.preventDefault();

  // Присваиваем значения полей nameInput и descriptionInput из свойства value
  // нужным элементам (profileName и profileDescription) с помощью textContent

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  // Добавляем функцию закрытия popup

  closeEditProfilePopup();

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
*/
