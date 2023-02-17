import bungalowsQueries from "./mysql_queries/bungalows_queries.js";
import configQueries from "./mysql_queries/config_queries.js";
import productQueries from "./mysql_queries/product_queries.js";
import userQueries from "./mysql_queries/user_queries.js";

const dao = {};

//Buscar un usuario por el email
dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);

//Añadir un nuevo usuario
dao.addUser = async (userData) => await userQueries.addUser(userData);

//Buscar usuario por Id
dao.getUserById = async (id) => await userQueries.getUserById(id);

//Eliminar user por Id
dao.deleteUser = async (id) => await userQueries.deleteUser(id);

// Modificar usuario por su id
dao.updateUser = async (id, userData) =>
  await userQueries.updateUser(id, userData);

dao.getProducts = async () => await productQueries.getProducts();

dao.getProductsById = async (id) => await productQueries.getProductsById(id);

// Añadir datos de la imagen subida al servidor
dao.addImage = async (imageData) => await productQueries.addImage(imageData);

// Obtener una imagen por su id
dao.getImageById = async (id) => await productQueries.getImageById(id);

//Obtener producto por referencia
dao.getProductByRef = async (ref) => await productQueries.getProductByRef(ref);

//Añadir un producto a bbdd
dao.addProduct = async (productData) =>
  await productQueries.addProduct(productData);

dao.getConfig = async () => await configQueries.getConfig();

dao.getDisposicion = async () => await configQueries.getDisposicion();

dao.getOrientacion = async (disposicion) =>
  await configQueries.getOrientacion(disposicion);

dao.getModelo = async (orientacion) =>
  await configQueries.getModelo(orientacion);

dao.getTipo = async (modelo) => await configQueries.getTipo(modelo)

dao.getBungalowa = async (tipo) => await configQueries.getBungalowa(tipo)

dao.getBungalowb = async (bungalowa) => await configQueries.getBungalowb(bungalowa)

dao.getBungalowc = async (bungalowb) => await configQueries.getBungalowc(bungalowb)

dao.getModeloBungalowSimple = async ({disposicion,orientacion,modelo,tipo}) => await configQueries.getModeloBungalowSimple({disposicion,orientacion,modelo,tipo})

dao.addBungalow = async (bungalowData) =>
  await bungalowsQueries.addBungalows(bungalowData);
export default dao;
