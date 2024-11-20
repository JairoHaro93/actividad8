const {
  selectAllAutors,
  selectAutorById,
  insertAutor,
  updateAutorById,
  deleteAutorById,
  selectAllPostsByAutorId,
  selectPostbyAutorIdandCategory,
} = require("../models/autors.model");

const getAllAutors = async (req, res, next) => {
  try {
    const [result] = await selectAllAutors();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getAutorById = async (req, res, next) => {
  const { autorId } = req.params;
  try {
    const autor = await selectAutorById(autorId);
    if (!autor) {
      return res.status(404).json({ message: "El autor no existe" });
    }
    res.json(autor);
  } catch (error) {
    next(error);
  }
};

const getAllPostsByAutorId = async (req, res, next) => {
  const { autorId } = req.params;
  try {
    const [result] = await selectAllPostsByAutorId(autorId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getPostByAutorIdandCategory = async (req, res, next) => {
  const { autorId, categoria } = req.params;

  try {
    const [result] = await selectPostbyAutorIdandCategory(autorId, categoria);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const createAutor = async (req, res, next) => {
  try {
    //insertar Autor
    const [result] = await insertAutor(req.body);
    //recupera los datos del autor insertado
    const autor = await selectAutorById(result.insertId);
    res.json(autor);
  } catch (error) {
    next(error);
  }
};

const updateAutor = async (req, res, next) => {
  const { autorId } = req.params;
  try {
    //actualizo el autor
    await updateAutorById(autorId, req.body);
    //recupero los datos
    const autor = await selectAutorById(autorId);
    res.json(autor);
  } catch (error) {
    next(error);
  }
};

const deleteAutor = async (req, res, next) => {
  const { autorId } = req.params;
  try {
    //recupero los datos que voy a eliminar
    const autor = await selectAutorById(autorId);
    //elimino de la BBDD
    await deleteAutorById(autorId);

    res.json(autor);
  } catch (error) {
    next();
  }
};

module.exports = {
  getAllAutors,
  getAutorById,
  getAllPostsByAutorId,
  getPostByAutorIdandCategory,
  createAutor,
  updateAutor,
  deleteAutor,
};
