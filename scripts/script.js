let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName= document.querySelector('.profile__name');
let popupName = document.querySelector('.popup__inputs_type_name');
let profileAbout= document.querySelector('.profile__about');
let popupAbout = document.querySelector('.popup__inputs_type_about');
let formElement = document.querySelector('form[name=profile-info]');

// Открытие и закрытие попапа

function closePopup(){
    popup.classList.remove('popup_opened');
}

function openPopup(){
    popup.classList.add('popup_opened');
    popupName.value=profileName.textContent;
    popupAbout.value=profileAbout.textContent;
}

// Отправка формы попапа

function editProfile (evt) {
    evt.preventDefault();
    profileName.textContent=popupName.value;
    profileAbout.textContent=popupAbout.value;
    closePopup();
}


closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);
formElement.addEventListener('submit', editProfile);