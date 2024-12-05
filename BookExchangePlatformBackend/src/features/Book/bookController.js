import BookRepository from "./bookRepository.js";

export default class BookController {
  constructor() {
    this.bookRepository = new BookRepository();
  }
  async getAllBooks(req, res, next) {
    try {
      const books = await this.bookRepository.getAllBooks();
      res.status(200).send(books);
    } catch (error) {
      console.log(error);
      console.log("Passing error to middleware");
      next(error);
    }
  }
  async postBooks(req, res, next) {
    try {
      const { title, author, genre } = req.body;
      const userId = req.userID;
      const newBook = await this.bookRepository.postBooks({
        title,
        author,
        genre,
        owner: userId,
      });
      return res.status(201).json(newBook);
    } catch (error) {
      console.log(error);
      console.log("Passing error to middleware");
      next(error);
    }
  }
  async updateBook(req, res, next) {
    try {
      const { title, author, genre, bookId } = req.query;
      const userId = req.userID;
      const updatedBook = await this.bookRepository.updateBook(
        title,
        author,
        genre,
        bookId,
        userId
      );
      res.status(200).json(updatedBook);
    } catch (error) {
      console.log(error);
      console.log("Passing error to middleware");
      next(error);
    }
  }
  async deleteBook(req, res, next) {
    try {
      const { bookId } = req.query;
      const userId = req.userID;
      const deletedBook = await this.bookRepository.deleteBook(bookId, userId);
      res.status(200).json(deletedBook);
    } catch (error) {
      console.log(error);
      console.log("Passing error to middleware");
      next(error);
    }
  }
  async getFilteredBooks(req, res, next) {
    try {
      const { title, author, genre } = req.body;
      const userId = req.userID;
      const books = await this.bookRepository.getFilteredBooks(
        title,
        author,
        genre,
        userId
      );
      res.status(200).json(books);
    } catch (error) {
      console.log(error);
      console.log("Passing error to middleware");
      next(error);
    }
  }
}
