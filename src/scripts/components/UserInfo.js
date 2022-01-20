export default class UserInfo {
  constructor( userNameSelector, userDescriptionSelector, userAvatarSelector ) {
    this._userAvatarElement = document.querySelector(`.${userAvatarSelector}`);
    this._userNameElement = document.querySelector(`.${userNameSelector}`);
    this._userDescriptionElement = document.querySelector(`.${userDescriptionSelector}`);
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userDescription: this._userDescriptionElement.textContent,
      userAvatar: this._userAvatarElement.src
    }
  }

  setUserInfo( userName, userDescription) {
    this._userNameElement.textContent = userName;
    this._userDescriptionElement.textContent = userDescription;
  }

  setUserAvatar(userAvatar){
    this._userAvatarElement.src = userAvatar;
}
}
