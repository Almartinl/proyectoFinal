import db from "../mysql.js";

const configQueries = {};

configQueries.getConfig = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("select * from configurador", [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

configQueries.getDisposicion = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("select * from disposicion", [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

configQueries.getOrientacion = async (disposicion) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "select * from orientacion where disposicion = ?",
      disposicion,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

configQueries.getModelo = async (orientacion) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "select * from modelo where orientacion = ?",
      orientacion,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default configQueries;
