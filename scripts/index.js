import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {openPopup, closePopup} from './utils.js';

const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.popup__close-button');
const profilePopup = document.querySelector('#popup_profile');
const elementsPopup = document.querySelector('#popup_elements');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const popupName = document.querySelector('.popup__inputs_type_name');
const profileAbout = document.querySelector('.profile__about');
const popupAbout = document.querySelector('.popup__inputs_type_about');
const popupPlace = document.querySelector('.popup__inputs_type_place');
const popupPicture = document.querySelector('.popup__inputs_type_picture');
const formProfile = document.querySelector('form[name=profile-info]');
const formElement = document.querySelector('form[name=element-content]');
const elements = document.querySelector('.elements');
const formList = Array.from(document.querySelectorAll('.form'));

/*Добавление карточек-заглушек*/
initialCards.forEach((item) => {
    const card = new Card(item.name, item.link);

    const cardElement = card.generateCard();

    elements.prepend(cardElement);
});

/*Добавление новых карточек*/
function addElement(evt) {
    evt.preventDefault();
    const card = new Card(popupPlace.value, popupPicture.value);
    const cardElement = card.generateCard();
    elements.prepend(cardElement);

    closePopup(elementsPopup);
}

/*Добавление и сброс валидации*/
formList.forEach((item) => {
    const validator = new FormValidator({
        inputSelector: '.popup__inputs',
        submitButtonSelector: '.popup__submit-button',
        inactiveButtonClass: 'popup__inactive-submit-button',
        inputErrorClass: 'popup__inputs_type_error',
        errorClass: 'popup__inputs-error_active'
    }, item);
    validator.enableValidation();
});

function resetValidation(popup) {
    popup.querySelectorAll('.popup__inputs').forEach((item) => {
        item.classList.remove('popup__inputs_type_error')
    });
    popup.querySelector('.popup__submit-button').classList.add('popup__inactive-submit-button');
    popup.querySelector('.popup__submit-button').setAttribute("disabled", "disabled");
    popup.querySelectorAll('.popup__inputs-error').forEach((item) => {
        item.classList.remove('popup__inputs-error_active')
    });
}

/*Открытие попапов*/
function openElementsPopup() {
    popupPlace.value = '';
    popupPicture.value = '';
    openPopup(elementsPopup);
    resetValidation(elementsPopup);
}

function openProfilePopup() {
    openPopup(profilePopup);
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
    resetValidation(profilePopup);
}

// Отправка формы попапа-профиля
function editProfile(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
    closePopup(profilePopup);
}

// Кнопки
closeButtons.forEach(function (item) {
    item.addEventListener('click', closePopup)
});
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openElementsPopup);
formProfile.addEventListener('submit', editProfile);
formElement.addEventListener('submit', addElement);
popups.forEach(function (item) {
    item.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('popup')) {
            closePopup()
        }
    })
});

