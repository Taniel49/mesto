let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName= document.querySelector('.profile__name');
let popupName = document.querySelector('.popup__inputs_type_name');
let profileAbout= document.querySelector('.profile__about');
let popupAbout = document.querySelector('.popup__inputs_type_about');
let formElement = document.querySelector('form[name=profile-info]');
const elementTemplate = document.querySelector('#element-template').content;
const elements = document.querySelector('.elements');
const elementName = document.querySelector('.element__name');
const elementPicture = document.querySelector('.element__picture');
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

// Добавление элементов
elements.append(elementTemplate);
elementName.textContent='Архыз';
elementPicture.setAttribute("src", "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg");


// Открытие и закрытие попапа

function closePopup(){
    popup.classList.remove('popup_opened');
}

function openPopup(){
    popup.classList.add('popup_opened');
    popupName.value=profileName.textContent;
    popupAbout.value=profileAbout.textContent;
}

// Отправка формы попапа

function editProfile (evt) {
    evt.preventDefault();
    profileName.textContent=popupName.value;
    profileAbout.textContent=popupAbout.value;
    closePopup();
}


closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);
formElement.addEventListener('submit', editProfile);