import express from "express";
import configController from "../controller/configurador_controller.js";

const configRouter = express.Router();

configRouter.get("/", configController.getConfig);

configRouter.get("/disposicion", configController.getDisposicion);

configRouter.post("/orientacion", configController.getOrientacion);

configRouter.post("/modelo", configController.getModelo);

configRouter.post("/tipo", configController.getTipo);

configRouter.post("/bungalowa", configController.getBungalowa)

configRouter.post("/bungalowb", configController.getBungalowb)

configRouter.post("/bungalowc", configController.getBungalowc)

configRouter.post("/modelosimple", configController.getModeloBungalowSimple)

export default configRouter;
