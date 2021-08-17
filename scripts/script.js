const profilePopup = document.querySelector('#popup_profile');
const elementsPopup = document.querySelector('#popup_elements');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const deleteButton = document.querySelector('.element__delete-button');
const likeButton = document.querySelector('.element__like-button');
const profileName= document.querySelector('.profile__name');
const popupName = document.querySelector('.popup__inputs_type_name');
const profileAbout= document.querySelector('.profile__about');
const popupAbout = document.querySelector('.popup__inputs_type_about');
const popupPlace = document.querySelector('.popup__inputs_type_place');
const popupPicture = document.querySelector('.popup__inputs_type_picture');
const formProfile = document.querySelector('form[name=profile-info]');
const formElement = document.querySelector('form[name=element-content]');
const elementTemplate = document.querySelector('.element-template').content;
const elements = document.querySelector('.elements');
const initialCards = [
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

// Добавление карточек-заглушек
initialCards.forEach(function (item) {
    const card = elementTemplate.cloneNode(true);

    card.querySelector('.element__name').textContent = item.name;
    card.querySelector('.element__picture').src= item.link;

    elements.append(card);
});

// Открытие и закрытие попапов
function closePopup(){
    elementsPopup.classList.remove('popup_opened');
    profilePopup.classList.remove('popup_opened');

}

function openElementsPopup(){
    elementsPopup.classList.add('popup_opened');
}

function openProfilePopup(){
    profilePopup.classList.add('popup_opened');
    popupName.value=profileName.textContent;
    popupAbout.value=profileAbout.textContent;
}

// Отправка формы попапа-профиля
function editProfile (evt) {
    evt.preventDefault();
    profileName.textContent=popupName.value;
    profileAbout.textContent=popupAbout.value;
    closePopup();
}

// Отправка формы попапа-карточек и удаление карточек
function addElement (evt) {
    evt.preventDefault();

    const card = elementTemplate.cloneNode(true);

    card.querySelector('.element__name').textContent = popupPlace.value;
    card.querySelector('.element__picture').src= popupPicture.value;

    elements.append(card);

    closePopup();
}

function deleteElement(){
    const elementItem = deleteButton.closest('.element');
    elementItem.remove();
}

// Лайк карточек
function likeElement(){
    likeButton.closest('.element__like-button').classList.add('element__like-button_liked');
}

// Кнопки
closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openElementsPopup);
formProfile.addEventListener('submit', editProfile);
formElement.addEventListener('submit', addElement);
deleteButton.addEventListener('click', deleteElement);
likeButton.addEventListener('click', likeElement);
