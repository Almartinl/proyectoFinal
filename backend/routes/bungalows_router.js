import express from "express";
import bungalowsController from "../controller/bungalows_controller.js";

const bungalowsRouter = express.Router();

bungalowsRouter.post("/save", bungalowsController.addBungalow);
bungalowsRouter.post("/", bungalowsController.getAllBungalow);
bungalowsRouter.delete("/delete", bungalowsController.deleteBungalowById);

export default bungalowsRouter;
