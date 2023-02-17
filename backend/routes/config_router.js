import express from "express";
import configController from "../controller/configurador_controller.js";

const configRouter = express.Router();

configRouter.get("/", configController.getConfig);

configRouter.get("/disposicion", configController.getDisposicion);

configRouter.post("/orientacion", configController.getOrientacion);

configRouter.post("/modelo", configController.getModelo);

export default configRouter;
