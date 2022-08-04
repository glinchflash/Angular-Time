export class Friend {
  private _firstName: string | null;
  private _lastName: string | null;
  private _email: string | null;
  private _phoneNumber: number | null;
  private  _favouriteLanguage: string | null;


  constructor(firstname: string | null, lastname: string | null, email: string | null, phonenumber: number | null, favlanguage: string | null) {
    this._firstName = firstname;
    this._lastName = lastname
    this._email = email;
    this._phoneNumber = phonenumber;
    this._favouriteLanguage = favlanguage
  }

  get firstName(): string | null {
    return this._firstName;
  }

  set firstName(value: string | null) {
    this._firstName = value;
  }

  get lastName(): string | null {
    return this._lastName;
  }

  set lastName(value: string | null) {
    this._lastName = value;
  }

  get email(): string | null {
    return this._email;
  }

  set email(value: string | null) {
    this._email = value;
  }

  get phoneNumber(): number | null {
    return this._phoneNumber;
  }

  set phoneNumber(value: number | null) {
    this._phoneNumber = value;
  }

  get favouriteLanguage(): string | null {
    return this._favouriteLanguage;
  }

  set favouriteLanguage(value: string | null) {
    this._favouriteLanguage = value;
  }

}
