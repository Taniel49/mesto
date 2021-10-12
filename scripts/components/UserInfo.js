import {profileAbout, profileName} from "../utils/constants.js";

export default class UserInfo {
    constructor(name, about) {
        this._name = name;
        this._about = about;
    }

    getUserInfo() {
        this._UserInfo = {};
        this._UserInfo.name = profileName.textContent;
        this._UserInfo.about = profileAbout.textContent
        return UserInfo;
    }

    setUserInfo() {
        profileName.textContent = this._name;
        profileAbout.textContent = this._about;
    }

}