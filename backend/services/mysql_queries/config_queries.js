import db from "../mysql.js";

const configQueries = {};

configQueries.getConfigBungalowByDisposicion = async (disposicion) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "select orientacion, bungalowa from configurador where disposicion = ? group by orientacion, bungalowa",
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

export default configQueries;
