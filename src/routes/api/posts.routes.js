const router = require("express").Router();

const {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} = require("../../controllers/posts.controller");

//Obtener todos los posts
router.get("/", getAllPosts);

//Obtener post por id
router.get("/:postId", getPostById);

//Crear y muestra un post
router.post("/", createPost);

//Actualiza y muestra un post por id
router.put("/:postId", updatePost);

//Elimina el post por id
router.delete("/:postId", deletePost);

module.exports = router;
