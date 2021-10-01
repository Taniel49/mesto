import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

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
const picturePopup = document.querySelector('#popup_picture');
const template = document.querySelector('.element-template');

/*Общее добавление карточек*/
function createCard(name, link, templateSelector) {
    const card = new Card(name, link, templateSelector, handleCardClick);
    return card.generateCard();
}

/*Добавление карточек-заглушек*/
initialCards.forEach((item) => {
    elements.prepend(createCard(item.name, item.link, template));
});

/*Добавление новых карточек*/
function addElement(evt) {
    evt.preventDefault();
    elements.prepend(createCard(popupPlace.value, popupPicture.value, template));

    closePopup(elementsPopup);
}

/*Добавление и сброс валидации*/
function enableAndResetValidation(settings, form) {
    const validator = new FormValidator(settings, form);
    validator.resetValidation();
    validator.enableValidation();
}

function enableValidationProfile() {
    enableAndResetValidation({
        inputSelector: '.popup__inputs',
        submitButtonSelector: '.popup__submit-button',
        inactiveButtonClass: 'popup__inactive-submit-button',
        inputErrorClass: 'popup__inputs_type_error',
        errorClass: 'popup__inputs-error_active'
    }, formProfile);
}

function enableValidationElements() {
    enableAndResetValidation({
        inputSelector: '.popup__inputs',
        submitButtonSelector: '.popup__submit-button',
        inactiveButtonClass: 'popup__inactive-submit-button',
        inputErrorClass: 'popup__inputs_type_error',
        errorClass: 'popup__inputs-error_active'
    }, formElement);
}

/*Открытие и закрытие попапа - общее*/

function handleCardClick(name, link) {
    picturePopup.querySelector('.popup__picture').src = link;
    picturePopup.querySelector('.popup__picture').alt = name;
    picturePopup.querySelector('.popup__caption').textContent = name;
    openPopup(picturePopup);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}

function closePopup() {
    const popupOpened = document.querySelector('.popup_opened');
    popupOpened.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup()
    }
}

/*Открытие попапов*/
function openElementsPopup() {
    popupPlace.value = '';
    popupPicture.value = '';
    openPopup(elementsPopup);
    enableValidationElements();
}

function openProfilePopup() {
    openPopup(profilePopup);
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
    enableValidationProfile();
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

