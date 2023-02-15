import { currentDir } from "../index.js";
import dao from "../services/dao.js";

const __dirname = currentDir().__dirname;

const controller = {};

controller.addBungalow = async (req, res) => {
  const { nombre, usuario, planta } = req.body;
  if (!nombre || !usuario || !planta)
    return res.status(400).send("Error al recibir el body");

  try {
    const addBungalow = await dao.addBungalow(req.body);
    if (addBungalow) return res.send(`${nombre} registrado`);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
