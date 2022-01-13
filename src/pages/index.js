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
import {API} from "../scripts/components/API";

/*Запросы*/

const api = new API(`https://mesto.nomoreparties.co/v1/cohort-28`, `b031c7a0-313e-4731-b83c-33069b14829c`);

/*Профиль*/

api.getProfile()
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch((err) => {
    console.log(err);
})
    .then((result) => {
        document.querySelector('.profile__name').textContent = result.name;
        document.querySelector('.profile__about').textContent = result.about;
        document.querySelector('.profile__avatar').src = result.avatar;
    });

/*Начальные карточки*/

const cardList = new Section({
    items: initialCards,
    renderer: createCard
}, '.page__elements');

api.getInitialCards()
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch((err) => {
    console.log(err);
})
    .then((result) => {
        result.forEach(card => {
            cardList.addItem(card);
        })
    });

/*Создание новой карточки*/

function createCard(item) {
    const card = new Card(item, template, () => {
        popupWithImage.openPopup(item.name, item.link);
    }, api);

    return card.generateCard();
}

/*Попап карточек*/

const cardFormPopup = new PopupWithForm('popup_elements', () => {
    const item = {name: popupPlace.value, link: popupPicture.value, likes: []}
    cardList.addItem(item);
    document.querySelector('.popup__create-button').textContent = 'Сохранение...';
    api.postCard(item).catch((err) => {
        console.log(err);
    }).finally(() => {
        document.querySelector('.popup__create-button').textContent = 'Создать';
        cardFormPopup.closePopup();
    });

    document.querySelector('.element__delete-button').style.display = "block";
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
    document.querySelector('.popup__save-button').textContent = 'Сохранение...';
    api.patchProfile(popupName.value, popupAbout.value).catch((err) => {
        console.log(err);
    }).finally(() => {
        document.querySelector('.popup__save-button').textContent = 'Сохранить';
        infoPopup.closePopup();
    });

});

infoPopup.setEventListeners();
editButton.addEventListener('click', () => {
    const {userName, userDescription} = userInfo.getUserInfo();
    popupName.value = userName;
    popupAbout.value = userDescription;
    infoPopup.openPopup();
    profileFormValidator.resetValidation();
});

/*Попап аватара*/
const avatarPopup = new PopupWithForm('popup_avatar', () => {
    document.querySelector(".profile__avatar").src = document.querySelector(".popup__inputs_type_avatar").value;
    document.querySelector('.popup__create-button').textContent = 'Сохранение...';
    api.patchAvatar(document.querySelector(".popup__inputs_type_avatar").value).catch((err) => {
        console.log(err);
    }).finally(() => {
        document.querySelector('.popup__create-button').textContent = 'Сохраннить';
        avatarPopup.closePopup();
    });

});

avatarPopup.setEventListeners();

document.querySelector(".profile__avatar-container").addEventListener('click', () => {
    avatarPopup.openPopup();
    profileFormValidator.resetValidation();
});

/*Попап с изображением*/
const popupWithImage = new PopupWithImage('popup_picture');
popupWithImage.setEventListeners();

/*Добавление валидации*/
const profileFormValidator = new FormValidator(validationSettings, formProfile);
const elementFormValidator = new FormValidator(validationSettings, formElement);

profileFormValidator.enableValidation();
elementFormValidator.enableValidation();
