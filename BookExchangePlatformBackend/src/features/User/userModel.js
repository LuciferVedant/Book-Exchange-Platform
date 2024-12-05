export default class UserDummy {
  constructor(
    name,
    email,
    password,
    // booksHave,
    // booksWant,
    // exchangeRequests,
    id
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    // this.booksHave = booksHave;
    // this.booksWant = booksWant;
    // this.exchangeRequests = exchangeRequests;
    this._id = id;
  }
}
