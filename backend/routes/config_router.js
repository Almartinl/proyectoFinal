import express from "express";
import configController from "../controller/configurador_controller.js";

const configRouter = express.Router();

configRouter.get("/", configController.getConfig);

export default configRouter;
