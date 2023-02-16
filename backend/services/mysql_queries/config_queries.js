import db from "../mysql.js";

const configQueries = {};

configQueries.getConfig = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "select * from configurador",
      [],
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
