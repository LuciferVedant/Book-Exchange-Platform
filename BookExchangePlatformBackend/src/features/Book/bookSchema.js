import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const BookModel = mongoose.model("Book", bookSchema);
export default BookModel;
