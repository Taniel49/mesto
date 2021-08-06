let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let closeButton = document.querySelector('.close-button');

function closePopup(){
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);

function openPopup(){
    popup.classList.add('popup_opened');
}
editButton.addEventListener('click', openPopup);

let profileName= document.querySelector('.profile__name');
let profileNameContent= profileName.textContent;
let popupName = document.querySelector('.popup__name');
popupName.value=profileNameContent

let profileAbout= document.querySelector('.profile__about');
let profileAboutContent= profileAbout.textContent;
let popupAbout = document.querySelector('.popup__about');
popupAbout.value=profileAboutContent

let saveChanges=document.querySelector('.save-button');
function editProfile () {
    let popupNameValue = popupName.value;
    let popupAboutValue = popupAbout.value;
    profileName.textContent=popupNameValue;
    profileAbout.textContent=popupAboutValue;
    closePopup();
}
saveChanges.addEventListener('click', editProfile)
