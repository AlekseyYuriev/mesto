
// выбираем элемент template для последующего наполнения данными из массива и секцию для добавления карточек

const templateElement = document.querySelector('.card-template');
const sectionElement = document.querySelector('.elements');

// выбираем элементы картинки для реализации всплывающего окна с фото

const bigCardImage = document.querySelector('.popup__image');
const bigCardTitle = document.querySelector('.popup__card-name');
const bigCardPopup = document.querySelector('.popup_type_bigcard');

// функция для создания карточек

const createCard = ({name, link}) => {

  const cardElement = templateElement.content.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src = link;
  cardElement.querySelector('.element__title').textContent = name;
  cardImage.alt = name;

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

// добавляем слушатель события по картинке с функцией просмотра увеличенной фото

cardImage.addEventListener('click', () => {
    bigCardImage.src = link;
    bigCardImage.alt = name;
    bigCardTitle.textContent = name;
    openPopup(bigCardPopup);
  })

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
const formEditElement = document.querySelector('.popup__form_type_edit')

const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');

const addButtonElement = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.popup_type_add');
const popupCardCloseButton = document.querySelector('.popup__close-button_type_card');
const formAddElement = document.querySelector('.popup__form_type_add');

// выбор элементов полей ввода в попапе для добавления карточек

const cardName = document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_link');

// выбираем кнопку закрытия попапа с увеличенной фото

const bigCardCloseButton = document.querySelector('.popup__close-button_type_bigcard');

// выбор элементов имени и описания профиля на основной странице

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// универсальная функция открытия popup

function openPopup(e) {
  e.classList.add('popup_opend');
}

//выберем все инпуты в попапе редактирования профиля
inputEditElements = Array.from(popupEditElement.querySelectorAll('.popup__input'));

//функция сбрасывающая ошибки валидации при поторном открытии попапа редактирования профиля

const removeErrorMessage = () => {
  inputEditElements.forEach((popupInput) => {
    popupInput.classList.remove('popup__input_type_error');
    const inputMessageError = document.querySelectorAll('.popup__input-error');
    inputMessageError.forEach((item) => {
      item.textContent = '';
    })
  })
}

// вешаем обработчик события по клику на кнопки открытия попапов с функцией колбэком

editButtonElement.addEventListener('click', () => {
  //убираем текст ошибок при открытии попапа редактирования профиля
  removeErrorMessage();
  // для попапа редактирования профиля переносим имя и описание в поля ввода
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(popupEditElement);
});

//выберем кнопку сохранения попапа с добавлением новой карточки
const saveButton = popupAddCardElement.querySelector('.popup__save-button');

addButtonElement.addEventListener('click', () => {

  //сделаем кнопку сохранения неактивной при открытии попапа
  disableButton(saveButton, VALIDATION_CONFIG);

  // для попапа добавления карточек оставляем пустыми поля названия карточки и ссылки
  formAddElement.reset();

  openPopup(popupAddCardElement);
});

// функция закрытия popup

function closePopup(e) {
    e.classList.remove('popup_opend');
}

// вешаем обработчик события по клику на кнопки закрытия попапов с функцией колбэком

popupProfileCloseButton.addEventListener('click', () => closePopup(popupEditElement));
popupCardCloseButton.addEventListener('click', () => closePopup(popupAddCardElement));
bigCardCloseButton.addEventListener('click', () => closePopup(bigCardPopup));

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

//выберем все попапы на странице и сразу представим их в виде массива
const popupList = Array.from(document.querySelectorAll('.popup'));

//универсальная функция закрытия всех попапов по клику на оверлэй

const closePopupByOverlay = () => {
  popupList.forEach((popupItem) => {
    popupItem.addEventListener('click', function(evt) {
      if (evt.target === evt.currentTarget) {
        closePopup(popupItem);
      }
    });
  });
}

closePopupByOverlay();

//универсальная функция закрытия всех попапов по клавише esc

const closePopupByEsc = () => {
  popupList.forEach((formElement) => {
    document.addEventListener('keydown', function(e) {
      if (e.keyCode === 27) {
        closePopup(formElement);
      }
    })
  })
}

closePopupByEsc();
