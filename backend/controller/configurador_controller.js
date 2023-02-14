import { currentDir } from "../index.js";
import dao from "../services/dao.js";

// Definimos la constante __dirname donde obtendremos la ruta absoluta
const __dirname = currentDir().__dirname;

const controller = {};

controller.getConfig = async (req, res) => {
  const { disposicion } = req.body;
  try {
    const config = await dao.getConfig(disposicion);
    // Si no existe devolvemos un 404 (not found)
    if (config.length <= 0) return res.status(404).send("productos no existe");

    return res.send(config);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

export default controller;
