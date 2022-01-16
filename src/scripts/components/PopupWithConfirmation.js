import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    setEventListeners(formSubmit) {
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            formSubmit();
        })
        super.setEventListeners();
    }
}