export default class UserInfo {
  constructor( {profileName, profileDescription} ) {
    this._profileName = document.querySelector(profileName);
    this._profileDescription = document.querySelector(profileDescription);
  }

  getUserInfo() {
    return {
      userName: this._profileName.textContent,
      userDescription: this._profileDescription.textContent,
    }
  }

  setUserInfo({user, about}) {
    this._profileName.textContent = user;
    this._profileDescription.textContent = about;
  }
}
