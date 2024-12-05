import express from "express";
import BookController from "./bookController.js";
import jwtAuth from "../../middlewares/jwt.middleware.js";
const bookRouter = express.Router();
const bookController = new BookController();

bookRouter.get("/getbooks", (req, res, next) => {
  bookController.getAllBooks(req, res, next);
});
bookRouter.post("/postbooks", jwtAuth, (req, res, next) => {
  bookController.postBooks(req, res, next);
});
bookRouter.put("/updatebook", jwtAuth, (req, res, next) => {
  bookController.updateBook(req, res, next);
});
bookRouter.delete("/deletebook", jwtAuth, (req, res, next) => {
  bookController.deleteBook(req, res, next);
});
bookRouter.get("/getfilterbook", (req, res, next) => {
  bookController.getFilteredBooks(req, res, next);
});

export default bookRouter;
