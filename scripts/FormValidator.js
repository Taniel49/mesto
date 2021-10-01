export class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
        this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
    }

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();

        });
        this._setEventListeners();
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
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input',  ()=> {
            this._toggleButtonState();
            this._checkInputValidity(inputElement);
        });
    });
};

_hasInvalidInput() {
    return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

_toggleButtonState() {
    if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._settings.inactiveButtonClass);
        this._buttonElement.setAttribute("disabled", "disabled");
    } else {
        this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
        this._buttonElement.removeAttribute("disabled");
    }
}
resetValidation() {
   this._inputList.forEach((item) => {
        item.classList.remove(this._settings.inputErrorClass)
    });
    this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", "disabled");
    this._form.querySelectorAll('.popup__inputs-error').forEach((item) => {
        item.classList.remove(this._settings.errorClass)
    });
}
}
