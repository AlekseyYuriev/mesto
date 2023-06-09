
// выбираем элемент template для последующего наполнения данными из массива и секцию для добавления карточек

const templateElement = document.querySelector('.card-template');
const sectionElement = document.querySelector('.elements');

// выбираем элементы картинки для реализации всплывающего окна с фото

const bigCardImage = document.querySelector('.bigcard__image');
const bigCardTitle = document.querySelector('.bigcard__title');
const bigCardPopup = document.querySelector('.bigcard');

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









const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  //errorElement.classList.remove('popup__input-error');
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault;
    });
    setEventListeners(formElement);
  });
};

enableValidation();

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {

    return !inputElement.validity.valid;
  })
};

function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_disabled');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('popup__save-button_disabled');
    buttonElement.removeAttribute('disabled');
  }
};








// обработчик события с функцией, которая закрывает попап с боьшой картинкой по клину на оверлэй

bigCardPopup.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(bigCardPopup);
  }
})

// выберем все попапы на странице

const popupList = document.querySelectorAll('.popup');

// напишем универсальную функцию закрытия для попапов с формой

for (let index = 0; index < popupList.length; index++) {
  const popupItem = popupList[index];
  popupItem.addEventListener('click', function(evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(popupItem);
    }
  });
}








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

const bigCardCloseButton = document.querySelector('.bigcard__close-button');

// выбор элементов имени и описания профиля на основной странице

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// универсальная функция открытия popup

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
