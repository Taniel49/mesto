import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._allInputs = this._popupElement.querySelectorAll('.popup__inputs');
        this._form = this._popupElement.querySelector('.form');
    }

    _getInputValues() {
        this._formValues = {};
        this._allInputs.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

    setEventListeners() {
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit(this._getInputValues());
        })
        super.setEventListeners();
    }

    closePopup() {
        this._form.reset();
        super.closePopup();
    }
}
