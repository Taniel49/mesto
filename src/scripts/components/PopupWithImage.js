import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupCardImage = this._popupElement.querySelector('.popup__picture');
        this._captionImage = this._popupElement.querySelector('.popup__caption');
    }

    openPopup(name, link) {
        this._popupCardImage.src = link;
        this._popupCardImage.alt = name;
        this._captionImage.textContent = name;
        super.openPopup();
    }
}

