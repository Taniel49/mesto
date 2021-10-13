export const profilePopup = document.querySelector('#popup_profile');
export const elementsPopup = document.querySelector('#popup_elements');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const profileName = document.querySelector('.profile__name');
export const popupName = document.querySelector('.popup__inputs_type_name');
export const profileAbout = document.querySelector('.profile__about');
export const popupAbout = document.querySelector('.popup__inputs_type_about');
export const popupPlace = document.querySelector('.popup__inputs_type_place');
export const popupPicture = document.querySelector('.popup__inputs_type_picture');
export const formProfile = document.querySelector('form[name=profile-info]');
export const formElement = document.querySelector('form[name=element-content]');
export const picturePopup = document.querySelector('#popup_picture');
export const template = document.querySelector('.element-template');
export const validationSettings = {
    inputSelector: '.popup__inputs',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__inactive-submit-button',
    inputErrorClass: 'popup__inputs_type_error',
    errorClass: 'popup__inputs-error_active'
}

export const initialCards = [
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