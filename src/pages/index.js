import './index.css';

import {Card} from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import {
    editButton,
    addButton,
    inputTypeName,
    inputTypeAbout,
    formProfile,
    formCard,
    template,
    validationSettings,
} from '../scripts/utils/constants.js';
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import {API} from "../scripts/components/API";
import PopupWithConfirmation from "../scripts/components/PopupWithConfirmation";

/*Запросы*/

const api = new API(`https://mesto.nomoreparties.co/v1/cohort-28`, `b031c7a0-313e-4731-b83c-33069b14829c`);

/*Информация при загрузке страницы*/

const userInfo = new UserInfo('profile__name', 'profile__about', 'profile__avatar');

const cardList = new Section(
    {renderer: createCard},
    '.page__elements');
let userID = '';

Promise.all([
    api.getProfile(),
    api.getInitialCards()
]).then((result) => {
    const user = result[0];
    const initialCards = result[1];
    userID = user._id;
    userInfo.setUserInfo(user.name, user.about);
    userInfo.setUserAvatar(user.avatar);
    initialCards.forEach(card => {
        cardList.addItem(card);
    });
}).catch((err) => {
    console.log(err);
});

/*Лайк карточки*/

const likeCard = (card) => {
    if (card.isLiked()) {
        api.deleteLike(card.id)
            .then((res) => {
                    card.setLikes(res.likes);
                }
            )
            .catch((err) => {
                console.log(err);
            });
    } else {
        api.putlike(card.id)
            .then((res) => {
                    card.setLikes(res.likes);
                }
            )
            .catch((err) => {
                console.log(err);
            });
    }
}

/*Удаление карточки*/

const confirmation = new PopupWithConfirmation('popup_delete');

const deleteCard = (card) => {
    document.querySelector('.popup__delete-button').textContent = 'Удаление...';
    api.deleteCard(card.id)
        .then((res) => {
            console.log(res)
            confirmation.closePopup();
            card.deleteElement();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            document.querySelector('.popup__delete-button').textContent = 'Да';
        })
}

/*Создание новой карточки*/

function createCard(item) {
    const card = new Card(item, template, userID, () => {
            popupWithImage.openPopup(item.name, item.link);
        }, () => {
            likeCard(card)
        },
        (card) => {
            confirmation.openPopup();
            confirmation.setSubmitAction(() => {
                deleteCard(card)
            });
            confirmation.setEventListeners();
        });

    return card.generateCard();
}

/*Попап карточек*/

const cardFormPopup = new PopupWithForm('popup_elements', (item) => {
    /*const item = {name: inputTypePlace.value, link: inputTypePicture.value, likes: []}*/
    document.querySelector('.popup__create-button').textContent = 'Сохранение...';
    api.postCard(item).then((res) => {
        cardList.addItem(res);
        cardFormPopup.closePopup();
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        document.querySelector('.popup__create-button').textContent = 'Создать';
    });
});

cardFormPopup.setEventListeners();

addButton.addEventListener('click', () => {
    cardFormPopup.openPopup();
    cardFormValidator.resetValidation();
});

/*Попап профиля*/

const infoPopup = new PopupWithForm('popup_profile', (item) => {
    document.querySelector('.popup__save-button').textContent = 'Сохранение...';
    api.patchProfile(item).then((res) => {
        userInfo.setUserInfo(res.name, res.about);
        infoPopup.closePopup();
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        document.querySelector('.popup__save-button').textContent = 'Сохранить';
    });
});

infoPopup.setEventListeners();

editButton.addEventListener('click', () => {
    const {userName, userDescription} = userInfo.getUserInfo();
    inputTypeName.value = userName;
    inputTypeAbout.value = userDescription;
    infoPopup.openPopup();
    profileFormValidator.resetValidation();
});

/*Попап аватара*/
const avatarPopup = new PopupWithForm('popup_avatar', (item) => {
    document.querySelector('.popup__create-button').textContent = 'Сохранение...';
    api.patchAvatar(item)
        .then((res) => {
            userInfo.setUserAvatar(res.avatar);
            avatarPopup.closePopup();
        })
        .catch((err) => {
        console.log(err);
    })
        .finally(() => {
        document.querySelector('.popup__create-button').textContent = 'Сохраннить';
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
const cardFormValidator = new FormValidator(validationSettings, formCard);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
