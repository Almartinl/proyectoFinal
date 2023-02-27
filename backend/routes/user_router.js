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

userRouter.post("/contact", userController.addContact);

userRouter.get("/count/contact", userController.getCountContact);

userRouter.get("/contact/all", userController.getAllContact);

userRouter.delete("/delete/contact", userController.deleteContactById);

export default userRouter;
