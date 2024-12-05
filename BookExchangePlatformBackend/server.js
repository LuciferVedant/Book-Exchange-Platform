import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./src/features/User/userRoutes.js";
import { ApplicationError } from "./src/error-handler/applicationError.js";
import { connectUsingMongoose } from "./src/Config/mongoose.js";
import bookRouter from "./src/features/Book/bookRoutes.js";
import jwtAuth from "./src/middlewares/jwt.middleware.js";
const server = express();

dotenv.config();

server.use(cors());
server.use(express.json());

// 3. Default request handler
server.get("/", (req, res) => {
  res.send("Welcome to Book Exchange Platform Backend");
});

server.use("/api/users", userRouter);
server.use("/api/book", bookRouter);
// Error handler middleware
server.use((err, req, res, next) => {
  console.log(err);
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).send(err.message);
  }
  if (err instanceof ApplicationError) {
    return res.status(err.code).send(err.message);
  }

  // server errors.
  res.status(500).send("Something went wrong, please try later");
});

// 4. Middleware to handle 404 requests.
server.use((req, res) => {
  res
    .status(404)
    .send(
      "API not found. Please check our documentation for more information at localhost:3200/api-docs"
    );
});

// 5. Specify port.
server.listen(3200, () => {
  console.log("server is up and connected to port 8000");
  connectUsingMongoose();
});
