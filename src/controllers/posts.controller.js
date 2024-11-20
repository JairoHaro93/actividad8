const {
  selectAllPosts,
  insertPost,
  selectPostById,
  updatePostById,
  deletePostById,
} = require("../models/posts.model");

const getAllPosts = async (req, res, next) => {
  try {
    const [result] = await selectAllPosts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await selectPostById(postId);
    if (!post) {
      return res.status(404).json({ message: "El post no existe" });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    //inserta el post
    const [result] = await insertPost(req.body);
    //recupera los datos del post insertado
    const post = await selectPostById(result.insertId);
    res.json(post);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  const { postId } = req.params;

  try {
    ///actualizo el post
    const [result] = await updatePostById(postId, req.body);
    //recupero el post
    const post = await selectPostById(postId);
    res.json(post);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  const { postId } = req.params;
  try {
    // muestro el post a eliminar
    const post = await selectPostById(postId);
    //elimina de la base de datos
    await deletePostById(postId);
    res.json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
};
