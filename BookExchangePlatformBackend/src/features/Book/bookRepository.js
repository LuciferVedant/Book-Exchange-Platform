import BookModel from "./bookSchema.js";
import { ApplicationError } from "../../error-handler/applicationError.js";
import mongoose from "mongoose";
import UserModel from "../User/userSchema.js";
export default class BookRepository {
  async getAllBooks() {
    try {
      const Books = await BookModel.find();
      return Books;
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async postBooks(book) {
    try {
      const newBook = new BookModel(book);

      // const user = await UserModel.findByIdAndUpdate(
      //   newBook.owner,
      //   { $push: { booksHave: newBook } },
      //   { new: true }
      // );
      // await user.save();

      await newBook.save();
      return newBook;
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
  async updateBook(title, author, genre, bookId, userId) {
    try {
      const data = {};

      if (title) data.title = title;
      if (author) data.author = author;
      if (genre) data.genre = genre;

      const oldBook = BookModel.findById({ _id: bookId, owner: userId });
      if (oldBook) {
        const newBook = await BookModel.findByIdAndUpdate(bookId, data, {
          new: true,
        });
        return newBook;
      } else {
        throw new Error(`No such Book found by ${userId}`);
      }
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
  async deleteBook(bookId, userId) {
    try {
      const Book = await BookModel.findById({ _id: bookId, owner: userId });
      if (!Book) {
        return res.status(404).json({ message: "Book not found" });
      }
      return await BookModel.findByIdAndDelete(bookId);
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
  async getFilteredBooks(title, author, genre, userId) {
    try {
      const query = {};

      if (title) query.title = title;
      if (author) query.author = author;
      if (genre) query.genre = genre;
      if (userId) query.owner = userId;

      const Books = await BookModel.find(query);
      if (!Books) {
        return res.status(404).json({ message: "Book not found" });
      }
      return Books;
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
}
