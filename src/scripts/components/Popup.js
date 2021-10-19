export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(`#${popupSelector}`);
        this._closeButton = this._popupElement.querySelector('.popup__close-button');
        this._closePopupByEsc = this._closePopupByEsc.bind(this);
    }

    openPopup() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupByEsc);
    }

    closePopup() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closePopupByEsc);
    }

    _closePopupByEsc(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.closePopup()
            }
        });
        this._closeButton.addEventListener('click', () => {
            this.closePopup()
        })
    }
}