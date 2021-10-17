import './index.css';

import '../images/add-button.svg';
import '../images/add-button-small.svg';
import '../images/close-button.svg';
import '../images/close-button-small.svg';
import '../images/delete-button.svg';
import '../images/edit-button.svg';
import '../images/kirill-pershin-1088404-unsplash.png';
import '../images/kirill-pershin-1404681-unsplash.png';
import '../images/kirill-pershin-1556355-unsplash.png';
import '../images/like-button.svg';
import '../images/like-button_liked.svg';
import '../images/logo.svg';
import '../images/photo.jpg';

import {Card} from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import {
    editButton,
    addButton,
    popupName,
    popupAbout,
    popupPlace,
    popupPicture,
    formProfile,
    formElement,
    template,
    validationSettings,
    initialCards
} from '../scripts/utils/constants.js';
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";

/*Попап с изображением*/
const popupWithImage = new PopupWithImage('popup_picture');
popupWithImage.setEventListeners();

/*Создание новой карточки*/
function createCard(item) {
    const card = new Card(item, template, () => {
        popupWithImage.openPopup(item.name, item.link);
    });
    return card.generateCard();
}

/*Добавление новой карточки*/
const cardList = new Section({
    items: initialCards,
    renderer: createCard
}, '.page__elements');
cardList.renderItems();

/*Попап карточек*/
const cardFormPopup = new PopupWithForm('popup_elements', () => {
    cardList.addItem({name: popupPlace.value, link: popupPicture.value});
    cardFormPopup.closePopup();
});

cardFormPopup.setEventListeners();

addButton.addEventListener('click', () => {
    cardFormPopup.openPopup();
    elementFormValidator.resetValidation();
});

/*Попап профиля*/
const userInfo = new UserInfo('profile__name', 'profile__about');

const infoPopup = new PopupWithForm('popup_profile', () => {
    userInfo.setUserInfo(popupName.value, popupAbout.value);
    infoPopup.closePopup();
});

infoPopup.setEventListeners();
editButton.addEventListener('click', () => {
    const {userName, userDescription} = userInfo.getUserInfo();
    popupName.value = userName;
    popupAbout.value = userDescription;
    infoPopup.openPopup();
    profileFormValidator.resetValidation();
});

/*Добавление валидации*/
const profileFormValidator = new FormValidator(validationSettings, formProfile);
const elementFormValidator = new FormValidator(validationSettings, formElement);

profileFormValidator.enableValidation();
elementFormValidator.enableValidation();
