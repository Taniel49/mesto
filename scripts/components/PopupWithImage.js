import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, data) {
        super(popupSelector);
        this.link = data.link;
        this.name = data.name;
    }

    openPopup() {
        this.handleCardClick();
        super.openPopup();
    }

    handleCardClick() {
        this._popupSelector.querySelector('.popup__picture').src = this.link;
        this._popupSelector.querySelector('.popup__picture').alt = this.name;
        this._popupSelector.querySelector('.popup__caption').textContent = this.name;
    }

    setEventListeners() {
        super.setEventListeners();
    }
}

