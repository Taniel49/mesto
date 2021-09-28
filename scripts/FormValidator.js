export class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
    }

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();

        });
        this._setEventListeners(this._form, this._settings);
    };

    _showInputError (inputElement, errorMessage){
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
};

_hideInputError (inputElement){
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = '';
};

_checkInputValidity (inputElement){
    if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
    } else {
        this._hideInputError(inputElement);
    }
};

_setEventListeners () {
    const inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input',  ()=> {
            this._toggleButtonState(inputList, buttonElement);
            this._checkInputValidity(inputElement);
        });
    });
};

_hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

_toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._settings.inactiveButtonClass);
        buttonElement.setAttribute("disabled", "disabled");
    } else {
        buttonElement.classList.remove(this._settings.inactiveButtonClass);
        buttonElement.removeAttribute("disabled");
    }
}
}
