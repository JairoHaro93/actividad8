const pool = require("../config/db");

// SELECT * FROM autors
function selectAllAutors() {
  return pool.query("SELECT * FROM autors");
}

//SELECT * FROM autors WHERE id_autors=variable
async function selectAutorById(autorId) {
  const [autors] = await pool.query("SELECT * FROM autors WHERE id_autors=?", [
    autorId,
  ]);
  if (autors.length === 0) {
    return null;
  } else {
    return autors[0];
  }
}

//SELECT ALL POST BY AUTORID
function selectAllPostsByAutorId(autorId) {
  return pool.query(
    `SELECT 
    posts.id_posts, 
    posts.titulo, 
    posts.descripcion, 
    posts.fecha_creacion, 
    posts.categoria, 
    autors.nombre AS autor_nombre, 
    autors.email AS autor_email 
FROM 
    posts
JOIN 
    autors 
ON 
    posts.id_autors = autors.id_autors
WHERE 
    autors.id_autors = ?`,
    [autorId]
  );
}

//SELECT POST BY AUTORID AND CATEGORY
function selectPostbyAutorIdandCategory(autorId, categoria) {
  return pool.query(
    `SELECT 
    posts.id_posts, 
    posts.titulo, 
    posts.descripcion, 
    posts.fecha_creacion, 
    posts.categoria, 
    autors.nombre AS autor_nombre, 
    autors.email AS autor_email 
FROM 
    posts
JOIN 
    autors 
ON 
    posts.id_autors = autors.id_autors
WHERE 
    autors.id_autors = ? 
    AND posts.categoria = ?;
`,
    [autorId, categoria]
  );
}
//INSERT INTO
function insertAutor({ nombre, email, imagen }) {
  return pool.query(
    "INSERT INTO autors (nombre, email, imagen) values(?,?,?)",
    [nombre, email, imagen]
  );
}

//UPDATE
function updateAutorById(autorId, { nombre, email, imagen }) {
  return pool.query(
    "UPDATE autors  SET nombre=?,email=?,imagen=? WHERE id_autors =?",
    [nombre, email, imagen, autorId]
  );
}
//DELETE
function deleteAutorById(autorId) {
  return pool.query("DELETE FROM autors WHERE id_autors =?", [autorId]);
}

module.exports = {
  selectAllAutors,
  selectAutorById,
  selectAllPostsByAutorId,
  selectPostbyAutorIdandCategory,
  insertAutor,
  updateAutorById,
  deleteAutorById,
};
