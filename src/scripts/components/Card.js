/*Добавление карточек*/

import Popup from "./Popup";

export class Card {
    constructor(data, templateSelector, handleCardClick, api) {
        this._api = api;
        this._id = data._id;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes.length;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__picture');
        this._likeButton = this._element.querySelector('.element__like-button');
        this._likeCounter = this._element.querySelector('.element__like-number');
    }

    _getTemplate() {
        return this._templateSelector.content.querySelector('.element').cloneNode(true);
    }

    generateCard() {
        this._setEventListeners();

        this._element.querySelector('.element__name').textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._likeCounter.textContent = this._likes;

        return this._element;
    }

    _deleteElement() {
        this._element.remove();
    }

    _likeElement() {
        this._likeNumber = Number(this._likeCounter.textContent);

        this._likeButton.classList.toggle('element__like-button_liked');
        if (this._likeButton.classList.contains('element__like-button_liked')) {
            this._likeCounter.textContent = this._likeNumber += 1;
            this._api.putlike(this._id).catch((err) => {
                console.log(err);
            });
        } else {
            this._likeCounter.textContent = this._likeNumber -= 1;
            this._api.deleteLike(this._id).catch((err) => {
                console.log(err);
            });
        }
    }

    _setEventListeners() {
        this._element.querySelector('.element__open-picture-button').addEventListener('click', () => {
            this._handleCardClick()
        });
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            const deletePopup = new Popup('popup_delete');
            deletePopup.setEventListeners();
            deletePopup.openPopup();
            document.querySelector('.popup__delete-button').addEventListener('click', () => {
                this._deleteElement();
                this._api.deleteCard(this._id).catch((err) => {
                    console.log(err);
                });
                deletePopup.closePopup();
            })
        });
        this._likeButton.addEventListener('click', () => {
            this._likeElement()
        });
    }
}