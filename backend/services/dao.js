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

export default dao;
