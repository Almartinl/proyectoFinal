import express from "express";
import userController from "../controller/user_controller.js";
import validateLoginDto from "../utils/validate_login_dto.js";

const userRouter = express.Router();

userRouter.get("/users", userController.getUsers);

userRouter.post("/email", userController.getUserByEmail);

userRouter.post("/", userController.addUser);

userRouter.post("/login", validateLoginDto, userController.loginUser);

userRouter.patch("/delete/:id", userController.deleteUser);

// Modificar un usuario por su id
userRouter.patch("/:id", userController.updateUser);

userRouter.get("/count", userController.getCountUser);

export default userRouter;
