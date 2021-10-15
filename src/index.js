import './pages/index.css';

import './images/add-button.svg';
import './images/add-button-small.svg';
import './images/close-button.svg';
import './images/close-button-small.svg';
import './images/delete-button.svg';
import './images/edit-button.svg';
import './images/kirill-pershin-1088404-unsplash.png';
import './images/kirill-pershin-1404681-unsplash.png';
import './images/kirill-pershin-1556355-unsplash.png';
import './images/like-button.svg';
import './images/like-button_liked.svg';
import './images/logo.svg';
import './images/photo.jpg';

import './fonts/Inter-Black.woff';
import './fonts/Inter-Black.woff2';
import './fonts/Inter-Medium.woff';
import './fonts/Inter-Medium.woff2';
import './fonts/Inter-Regular.woff';
import './fonts/Inter-Regular.woff2';

import {Card} from './scripts/components/Card.js';
import Section from './scripts/components/Section.js';
import {FormValidator} from './scripts/components/FormValidator.js';
import {
    profilePopup,
    elementsPopup,
    editButton,
    addButton,
    popupName,
    popupAbout,
    popupPlace,
    popupPicture,
    formProfile,
    formElement,
    picturePopup,
    template,
    validationSettings,
    initialCards
} from './scripts/utils/constants.js';
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import UserInfo from "./scripts/components/UserInfo.js";

/*Создание карточек-заглушек*/
const addDefaultElements = new Section({
    items: initialCards,
    renderer: (item) => {
        const handlePicturePopup = new PopupWithImage(picturePopup, item);
        handlePicturePopup.setEventListeners();
        const card = new Card(item, template, () => {
            handlePicturePopup.openPopup()
        });
        const cardElement = card.generateCard();
        addDefaultElements.addItem(cardElement);
    }
}, '.page__elements');

addDefaultElements.renderItems();

/*Попап карточек*/
const handleElementsPopup = new PopupWithForm(elementsPopup, () => {
    const addElement = new Section({
        items: [{
            name: popupPlace.value,
            link: popupPicture.value
        }],
        renderer: (item) => {
            const card = new Card(item, template);
            const cardElement = card.generateCard();
            addElement.addItem(cardElement);
        }
    }, '.page__elements');
    addElement.renderItems();
    handleElementsPopup.closePopup();
});
handleElementsPopup.setEventListeners();
addButton.addEventListener('click', () => {
    handleElementsPopup.openPopup();
    elementFormValidator.resetValidation();
});

/*Попап профиля*/
const userInfo = new UserInfo('profile__name', 'profile__about');

const handleProfilePopup = new PopupWithForm(profilePopup, () => {
    userInfo.setUserInfo(popupName.value, popupAbout.value);
    handleProfilePopup.closePopup();
});

handleProfilePopup.setEventListeners();
editButton.addEventListener('click', () => {
    const {userName, userDescription} = userInfo.getUserInfo();
    popupName.value = userName;
    popupAbout.value = userDescription;
    handleProfilePopup.openPopup();
    profileFormValidator.resetValidation();
});

/*Добавление валидации*/
const profileFormValidator = new FormValidator(validationSettings, formProfile);
const elementFormValidator = new FormValidator(validationSettings, formElement);

profileFormValidator.enableValidation();
elementFormValidator.enableValidation();
