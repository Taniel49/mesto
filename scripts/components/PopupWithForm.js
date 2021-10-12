import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
    }

    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__inputs');
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

    setEventListeners() {
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit(this._getInputValues());
        })
        super.setEventListeners();
    }

    closePopup() {
        this._popupSelector.querySelector('.form').reset();
        super.closePopup();
    }

    openPopup() {
        super.openPopup();
    }
}
