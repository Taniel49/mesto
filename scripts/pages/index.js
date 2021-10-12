import {Card} from '../components/Card.js';
import Section from '../components/Section.js';
import {FormValidator} from '../components/FormValidator.js';
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
} from '../utils/constants.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

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
const handleProfilePopup = new PopupWithForm(profilePopup, () => {
    const userInfo = new UserInfo(popupName.value, popupAbout.value);
    userInfo.setUserInfo();
    handleProfilePopup.closePopup();
})

handleProfilePopup.setEventListeners();
editButton.addEventListener('click', () => {
    handleProfilePopup.openPopup();
    profileFormValidator.resetValidation();
});

/*Добавление валидации*/
const profileFormValidator = new FormValidator(validationSettings, formProfile);
const elementFormValidator = new FormValidator(validationSettings, formElement);

profileFormValidator.enableValidation();
elementFormValidator.enableValidation();
