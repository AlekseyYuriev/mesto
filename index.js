
// реализация функции открытия/закрытия popup путём добавления класса

// выбор элементов, которые взаимодействуют с popup

const editButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = document.querySelector('.popup__close-button');
const popupElement = document.querySelector('.popup');

// функция, добавляющая/удаляющая класс, который делает popup видимым

function handleClick() {
  popupElement.classList.toggle('popup_opend');
}

// добавлен слушатель события по "клику" на кнопки "редактировать профиль" и "закрыть popup"

editButtonElement.addEventListener('click', handleClick);
popupCloseButtonElement.addEventListener('click', handleClick);


// реализация изменения данных "имя пользователя" и "информация о пользователе"

// выбран элемент формы

let formElement = document.querySelector('.form');

// выбраны элементы ввода имени и описания профиля

let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__description');

// Обработчик отправки формы, хотя данные на сервер пока что не отправляются

function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы

  // получить значение полей nameInput и jobInput из свойства value
  let a = nameInput.value;
  let b = jobInput.value;

  // выбрать элементы, куда должны быть вставлены значения полей

  let profileName = document.querySelector('.profile__name');
  let profileDescription = document.querySelector('.profile__description');

  // вставить новые значения с помощью textContent

  profileName.textContent = a;
  profileDescription.textContent = b;
}

//Прикрепить обработчик к форме: он будет следить за событием "submit" - "отправка"

formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', handleClick);


