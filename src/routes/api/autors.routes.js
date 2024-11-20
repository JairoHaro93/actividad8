const router = require("express").Router();

const {
  getAllAutors,
  getAutorById,
  createAutor,
  updateAutor,
  deleteAutor,
  getAllPostsByAutorId,
  getPostByAutorIdandCategory,
} = require("../../controllers/autors.controller");

//Obtener todos los autors
router.get("/", getAllAutors);

//Obtener autor por id
router.get("/:autorId", getAutorById);

//Obtener todos los posts de un Autor
router.get("/:autorId/posts", getAllPostsByAutorId);

//Obtener todos los posts de un Autor y categoria
router.get("/:autorId/:categoria/", getPostByAutorIdandCategory);

//Crea y muestra un Autor
router.post("/", createAutor);

//Actualiza y muestra un autor por id
router.put("/:autorId", updateAutor);

//Elimina el autor por id
router.delete("/:autorId", deleteAutor);

module.exports = router;
