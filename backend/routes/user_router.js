import express from "express";
import userController from "../controller/user_controller.js";
import validateLoginDto from "../utils/validate_login_dto.js";

const userRouter = express.Router();

userRouter.post("/", userController.addUser);

userRouter.post("/login", validateLoginDto, userController.loginUser);

userRouter.patch("/delete/:id", userController.deleteUser);

// Modificar un usuario por su id
userRouter.patch("/:id", userController.updateUser);

export default userRouter;
