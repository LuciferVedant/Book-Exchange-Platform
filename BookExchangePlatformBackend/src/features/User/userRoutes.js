// 1. Import express.
import express from "express";
import UserController from "./userController.js";
import jwtAuth from "../../middlewares/jwt.middleware.js";

// 2. Initialize Express router.
const userRouter = express.Router();

const userController = new UserController();

// All the paths to controller methods.

userRouter.post("/signup", (req, res, next) => {
  userController.signUp(req, res, next);
});
userRouter.post("/signin", (req, res, next) => {
  userController.signIn(req, res, next);
});
userRouter.put("/resetpassword", jwtAuth, (req, res, next) => {
  userController.resetPassword(req, res, next);
});

export default userRouter;
