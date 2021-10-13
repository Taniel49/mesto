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
