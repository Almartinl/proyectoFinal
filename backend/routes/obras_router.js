import express from "express";
import obrasController from "../controller/obras_controller.js";


const obrasRouter = express.Router();

obrasRouter.get("/",obrasController.getAllObras)

export default obrasRouter;