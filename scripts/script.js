let profilePopup = document.querySelector('#popup_profile');
let elementsPopup = document.querySelector('#popup_elements');
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName= document.querySelector('.profile__name');
let popupName = document.querySelector('.popup__inputs_type_name');
let profileAbout= document.querySelector('.profile__about');
let popupAbout = document.querySelector('.popup__inputs_type_about');
let formProfile = document.querySelector('form[name=profile-info]');
let formElement = document.querySelector('form[name=element-content]');
const elementTemplate = document.querySelector('.element-template').content;
const elements = document.querySelector('.elements');
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

// Добавление карточек-заглушек
initialCards.forEach(function (item) {
    const card = elementTemplate.cloneNode(true);

    card.querySelector('.element__name').textContent = item.name;
    card.querySelector('.element__picture').src= item.link;

    elements.append(card);
});



// Открытие и закрытие попапов

function closePopup(){
    profilePopup.classList.remove('popup_opened');
}

function openElementsPopup(){
    elementsPopup.classList.add('popup_opened');
}

function openProfilePopup(){
    profilePopup.classList.add('popup_opened');
    popupName.value=profileName.textContent;
    popupAbout.value=profileAbout.textContent;
}

// Отправка формы попапов

function editProfile (evt) {
    evt.preventDefault();
    profileName.textContent=popupName.value;
    profileAbout.textContent=popupAbout.value;
    closePopup();
}

function addElement (evt) {

}


closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openElementsPopup);
formProfile.addEventListener('submit', editProfile);
formElement.addEventListener('submit', addElement);