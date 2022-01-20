/*Добавление карточек*/

export class Card {
    constructor(data, templateSelector, userID, handleCardClick, handleLikeCard, handleDeleteCard) {
        this._userID = userID;
        this._handleLikeCard = handleLikeCard;
        this._handleDeleteCard = handleDeleteCard;
        this._owner = data.owner._id;
        this.id = data._id;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
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
        this.setLikes(this._likes);
        if (this._owner === this._userID){this._element.querySelector('.element__delete-button').style.display = 'block'}

        return this._element;
    }

    setLikes(likes){
        this._likes=likes;
        this._likeCounter.textContent = this._likes.length;
        if (this.isLiked()){
            this._likeButton.classList.add('element__like-button_liked');
        }
        else{
            this._likeButton.classList.remove('element__like-button_liked');
        }
    }

    isLiked(){
        for (let i = 0; i < this._likes.length; i++){if (this._likes[i]._id === this._userID){return true;} }
        return false;
    }

    deleteElement() {
        this._element.remove();
    }

    _setEventListeners() {
        this._element.querySelector('.element__open-picture-button').addEventListener('click', () => {
            this._handleCardClick()
        });
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._handleDeleteCard(this);
        });
        this._likeButton.addEventListener('click', () => {
            this._handleLikeCard()
        });
    }
}