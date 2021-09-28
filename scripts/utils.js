/*Открытие и закрытие попапа - общее*/

export const openPopup = function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}

export const closePopup = function closePopup() {
    const popupOpened = document.querySelector('.popup_opened');
    popupOpened.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

export const closePopupByEsc = function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup()
    }
}
