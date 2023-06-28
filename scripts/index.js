
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

  // выбираем кнопку удаления карточки

  const deleteCardButton = cardElement.querySelector('.element__delete-button');

  // добавляем слушатель события с функцией удаления карточки

  deleteCardButton.addEventListener('click', () => {
    cardElement.remove();
  });

  // выбираем кнопку лайка

  const likeButton = cardElement.querySelector('.element__like-button');

  // добавляем слушатель события с функцией, позваляющей ставить лайки

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__like-button_active');
  });

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

const formEditElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let descriptionInput = document.querySelector('.popup__input_type_description');

const addButtonElement = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.popup_type_add');
const popupCardCloseButton = document.querySelector('.popup__close-button_type_card');
const formAddElement = document.querySelector('.popup__form_type_add');

// выбор элементов имени и описания профиля на основной странице

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

// выбор элементов полей ввода в попапе для добавления карточек

let cardName = document.querySelector('.popup__input_type_card-name');
let cardLink = document.querySelector('.popup__input_type_link');

// универсальная функция открытия всех popup

function openPopup(e) {
  e.classList.add('popup_opend');
}

// вешаем обработчик события по клику на кнопки открытия попапов с функцией колбэком

editButtonElement.addEventListener('click', () => {
  // для попапа редактирования профиля переносим имя и описание в поля ввода
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(popupEditElement);
});

addButtonElement.addEventListener('click', () => {
  // для попапа добавления карточек оставляем пустыми поля названия карточки и ссылки
  cardName.value = '';
  cardLink.value = '';
  openPopup(popupAddCardElement);
});

// функция закрытия popup

function closePopup(e) {
  e.classList.remove('popup_opend');
}

// вешаем обработчик события по клику на кнопки закрытия попапов с функцией колбэком

popupProfileCloseButton.addEventListener('click', () => closePopup(popupEditElement));
popupCardCloseButton.addEventListener('click', () => closePopup(popupAddCardElement));

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
  const newCard = createCard({name, link});
  sectionElement.prepend(newCard);

  // добавляем функцию закрытия попапа после добавления новой карточки
  closePopup(popupAddCardElement);

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка» для формы создания карточек
formAddElement.addEventListener('submit', handleAddFormSubmit);
