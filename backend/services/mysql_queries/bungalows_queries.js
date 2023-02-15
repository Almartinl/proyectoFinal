import db from "../mysql.js";

const bungalowsQueries = {};

bungalowsQueries.addBungalows = async (bungalowsData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    console.log(bungalowsData);
    let bungalowObj = {
      nombre: bungalowsData.nombre,
      usuario: bungalowsData.usuario,
      planta: bungalowsData.planta,
    };
    return await db.query(
      "INSERT INTO bungalows SET ?",
      bungalowObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default bungalowsQueries;
