import './index.css';

import {Card} from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import {
    editButton,
    addButton,
    inputTypeName,
    inputTypeAbout,
    inputTypePlace,
    inputTypePicture,
    formProfile,
    formCard,
    template,
    validationSettings,
    inputTypeAvatar
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
    userInfo.setUserInfo(user.name, user.about, user.avatar);
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
            ).catch((err) => {
            console.log(err);
        });
    } else {
        api.putlike(card.id)
            .then((res) => {
                    card.setLikes(res.likes);
                }
            ).catch((err) => {
            console.log(err);
        });
    }
}

/*Удаление карточки*/

const confirmation = new PopupWithConfirmation('popup_delete');

const deleteCard = (card) => {
    document.querySelector('.popup__delete-button').textContent = 'Удаление...';
    api.deleteCard(card.id).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
    })
        .then((res) => {
            console.log(res)
            card.deleteElement();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            document.querySelector('.popup__delete-button').textContent = 'Да';
            confirmation.closePopup();
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
            confirmation.setEventListeners(() => {
                deleteCard(card)
            });
        });

    return card.generateCard();
}

/*Попап карточек*/

const cardFormPopup = new PopupWithForm('popup_elements', () => {
    const item = {name: inputTypePlace.value, link: inputTypePicture.value, likes: []}
    document.querySelector('.popup__create-button').textContent = 'Сохранение...';
    api.postCard(item).then((res) => {
        cardList.addItem(res);
    }).catch((err) => {
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
    cardFormValidator.resetValidation();
});

/*Попап профиля*/

const infoPopup = new PopupWithForm('popup_profile', () => {

    document.querySelector('.popup__save-button').textContent = 'Сохранение...';
    api.patchProfile(inputTypeName.value, inputTypeAbout.value).then(() => {
        userInfo.setUserInfo(inputTypeName.value, inputTypeAbout.value);
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        document.querySelector('.popup__save-button').textContent = 'Сохранить';
        infoPopup.closePopup();
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
const avatarPopup = new PopupWithForm('popup_avatar', () => {
    const {userAvatar} = userInfo.getUserInfo();
    inputTypeAvatar.value = userAvatar;
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
const cardFormValidator = new FormValidator(validationSettings, formCard);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
