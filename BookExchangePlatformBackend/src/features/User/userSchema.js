import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [25, "Name can't be greater than 25 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+\@.+\../, "Please enter a valid email"],
  },
  password: { type: String, required: true },
  // booksHave: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  // booksWant: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  // exchangeRequests: [
  //   {
  //     fromUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  //     toUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  //     bookOffered: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  //     bookRequested: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  //     status: {
  //       type: String,
  //       enum: ["pending", "accepted", "declined"],
  //       default: "pending",
  //     },
  //   },
  // ],
});
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
