export default class UserInfo {
  constructor( {profileName, profileDescription, profileAvatar} ) {
    this._profileName = document.querySelector(profileName);
    this._profileDescription = document.querySelector(profileDescription);
    this._profileAvatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    return {
      userName: this._profileName.textContent,
      userDescription: this._profileDescription.textContent,
    }
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileDescription.textContent = data.about;
  }

  setUserAvatar({avatar}) {
    this._profileAvatar.src = avatar;
  }
}
