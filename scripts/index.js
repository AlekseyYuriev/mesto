
// выбор элементов, которые взаимодействуют с popup и формой

const editButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = document.querySelector('.popup__close-button');
const popupElement = document.querySelector('.popup');

const formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let descriptionInput = document.querySelector('.popup__input_description');

// выбор элементов имени и описания профиля на основной странице

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

// функция открытия popup с переносом значений имени и описания профиля в поля формы

function openEditProfilePopup() {

  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;

  popupElement.classList.add('popup_opend');
}

editButtonElement.addEventListener('click', openEditProfilePopup);

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
