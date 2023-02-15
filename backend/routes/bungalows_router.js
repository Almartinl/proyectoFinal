import express from "express";
import bungalowsController from "../controller/bungalows_controller.js";

const bungalowsRouter = express.Router();

bungalowsRouter.post("/save", bungalowsController.addBungalow);

export default bungalowsRouter;
