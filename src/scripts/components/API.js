export class API {
    constructor(url, authorization) {
        this._URL = url;
        this._authorization = authorization;
    }

    _checkResult(res){
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }


    getProfile(){
        return fetch(`${this._URL}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        }).then(this._checkResult)
    }

    getInitialCards() {
        return fetch(`${this._URL}/cards`, {
            headers: {
                authorization: this._authorization
            }
        }).then(this._checkResult)
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
        }).then(this._checkResult)
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
            }).then(this._checkResult)
    }

    deleteLike(id) {
        return fetch(`${this._URL}/cards/${id}/likes`,
            {
                method: `DELETE`,
                headers: {
                    authorization: this._authorization,
                }
            }).then(this._checkResult)
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