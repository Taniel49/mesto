export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(`#${popupSelector}`);
        this._closeButton = this._popupSelector.querySelector('.popup__close-button');
        this._closePopupByEsc = this._closePopupByEsc.bind(this);
    }

    openPopup() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => {
            this._closePopupByEsc(evt)
        });
    }

    closePopup() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => {
            this._closePopupByEsc(evt)
        });
    }

    _closePopupByEsc(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    setEventListeners() {
        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.closePopup()
            }
        });
        this._closeButton.addEventListener('click', () => {
            this.closePopup()
        })
    }
}