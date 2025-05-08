import express from "express";
// import { authMiddleware } from "../middlewares/authMiddleware";
import { login, signup } from "../controllers/authController";
const userRouter=express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);

export default userRouter;