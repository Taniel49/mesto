import {openPopup} from './utils.js';

/*Добавление карточек*/

export class Card {
    constructor(name, link) {
        this._name = name;
        this._link = link;
    }

    _getTemplate() {
        return document.querySelector('.element-template').content.querySelector('.element').cloneNode(true);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__name').textContent = this._name;
        this._element.querySelector('.element__picture').src = this._link;
        this._element.querySelector('.element__picture').alt = this._name;

        return this._element;
    }

    _deleteElement() {
        this._element.remove();
    }

    _likeElement() {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_liked');
    }

    _openPicture() {
        const picturePopup = document.querySelector('#popup_picture');
        picturePopup.querySelector('.popup__picture').src = this._link;
        picturePopup.querySelector('.popup__picture').alt = this._name;
        picturePopup.querySelector('.popup__caption').textContent = this._name;
        openPopup(picturePopup);
    }

    _setEventListeners() {
        this._element.querySelector('.element__open-picture-button').addEventListener('click', () => {
            this._openPicture()
        });
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._deleteElement()
        });
        this._element.querySelector('.element__like-button').addEventListener('click', () => {
            this._likeElement()
        });
    }
}