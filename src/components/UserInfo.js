export default class UserInfo {
  constructor( {profileName, profileDescription} ) {
    this._profileName = profileName;
    this._profileDescription = profileDescription;
  }

  getUserInfo() {
    return {
      userName: this._profileName.textContent,
      userDescription: this._profileDescription.textContent,
    }
  }

  setUserInfo({name, about}) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = about;
  }
}
