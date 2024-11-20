const pool = require("../config/db");

// SELECT * FROM posts
function selectAllPosts() {
  return pool.query("SELECT * FROM posts");
}

//SELECT * FROM posts WHERE id_posts = variable
async function selectPostById(postId) {
  const [posts] = await pool.query("SELECT * FROM posts WHERE id_posts =?", [
    postId,
  ]);

  if (posts.length === 0) {
    return null;
  } else {
    return posts[0];
  }
}

// INSERT INTO
function insertPost({ titulo, descripcion, categoria, id_autors }) {
  return pool.query(
    "INSERT INTO posts (titulo, descripcion, categoria, id_autors) values(?,?,?,?)",
    [titulo, descripcion, categoria, id_autors]
  );
}

//PUT ACTUALIZACION DE DATOS
function updatePostById(postId, { titulo, descripcion, categoria, id_autors }) {
  return pool.query(
    "UPDATE posts  SET titulo=?,descripcion=?,categoria=?,id_autors=? WHERE id_posts =?",
    [titulo, descripcion, categoria, id_autors, postId]
  );
}

//DELETE
function deletePostById(postId) {
  return pool.query("DELETE FROM posts WHERE id_posts =?", [postId]);
}

module.exports = {
  selectAllPosts,
  selectPostById,
  insertPost,
  updatePostById,
  deletePostById,
};
