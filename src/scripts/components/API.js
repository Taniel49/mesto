export class API {
    constructor(url, authorization) {
        this._URL = url;
        this._authorization = authorization;
    }

    getProfile(){
        return fetch(`${this._URL}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
    }

    getInitialCards() {
        return fetch(`${this._URL}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
    }

    postCard(item) {
        return fetch(`${this._URL}/cards`, {
            method: `POST`,
            headers: {
                authorization: this._authorization,
                'Content-Type': `application/json`
            },
            body: JSON.stringify({
                name: item.name,
                link: item.link
            })
        });
    }

    patchProfile(userName, userDescription) {
        return fetch(`${this._URL}/users/me`, {
            method: `PATCH`,
            headers: {
                authorization: this._authorization,
                'Content-Type': `application/json`
            },
            body: JSON.stringify({
                name: userName,
                about: userDescription
            })
        })
    }

    patchAvatar(avatar) {
        return fetch(`${this._URL}/users/avatar`, {
            method: `PATCH`,
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
    }

    putlike(id) {
        return fetch(`${this._URL}/cards/${id}/likes`,
            {
                method: `PUT`,
                headers: {
                    authorization: this._authorization,
                }
            });
    }

    deleteLike(id) {
        return fetch(`${this._URL}/cards/${id}/likes`,
            {
                method: `DELETE`,
                headers: {
                    authorization: this._authorization,
                }
            });
    }

    deleteCard(id) {
        return fetch(`${this._URL}/cards/${id}`,
            {
                method: `DELETE`,
                headers: {
                    authorization: this._authorization,
                }
            });
    }
}