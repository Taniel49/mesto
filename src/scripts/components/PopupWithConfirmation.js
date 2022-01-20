import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    setSubmitAction(formSubmit){
        this._submitAction = formSubmit
    }

    setEventListeners() {
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitAction();
        })
        super.setEventListeners();
    }
}