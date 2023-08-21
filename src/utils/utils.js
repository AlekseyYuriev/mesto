import Card from '../components/Card.js';

// // отдельная функция создания карточки
// export const createCard = (item) => {
//   const card = new Card(item, '.card-template', handleCardClick);
//   return card.generateCard();
// };


/*
// добавляем карточки на страницу с помощью данных из массива
initialCards.forEach((item) => {
  sectionElement.append(createCard(item));
});
*/

/*
// универсальная функция открытия popup
function openPopup(e) {
  e.classList.add('popup_opend');
  //добавляем слушатель события с функцией закрытия попапа по клавише esc
  document.addEventListener('keydown', closePopupByEsc);
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

// добавим слушатель события с функцией закрытия попапа каждой кнопке

closeButton.forEach(button => {
const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
});

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

// функция, отвечающая за открытие попапа с увеличенной картинкой

function handleOpenPopup(name, link) {
  bigCardImage.src = link;
  bigCardImage.alt = name;
  bigCardTitle.textContent = name;
  openPopup(bigCardPopup);
}
*/
