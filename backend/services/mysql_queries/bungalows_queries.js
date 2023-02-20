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

bungalowsQueries.getAllBungalow = async (usuario) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM bungalows where usuario = ?",
      [usuario],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

bungalowsQueries.deleteBungalowById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "DELETE FROM bungalows WHERE id =?",
      [id],
      "delete",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default bungalowsQueries;
