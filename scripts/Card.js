/*Добавление карточек*/

export class Card {
    constructor(name, link, templateSelector,handleCardClick) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__picture');
        this._likeButton = this._element.querySelector('.element__like-button');
    }

    _getTemplate() {
        return this._templateSelector.content.querySelector('.element').cloneNode(true);
    }

    generateCard() {
        this._setEventListeners();

        this._element.querySelector('.element__name').textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        return this._element;
    }

    _deleteElement() {
        this._element.remove();
    }

    _likeElement() {
        this._likeButton.classList.toggle('element__like-button_liked');
    }

    _setEventListeners() {
       this._element.querySelector('.element__open-picture-button').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._deleteElement()
        });
        this._likeButton.addEventListener('click', () => {
            this._likeElement()
        });
    }
}