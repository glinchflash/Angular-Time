export class Friend {
   _firstName:string;
   _lastName:string;
   _email:string;
   _phoneNumber:number;
   _favouriteLanguage:string;


  constructor(firstname:string, lastname:string, email:string, phonenumber:number, favlanguage:string) {
    this._firstName = firstname;
    this._lastName = lastname
    this._email = email;
    this._phoneNumber = phonenumber;
    this._favouriteLanguage = favlanguage
  }
}
