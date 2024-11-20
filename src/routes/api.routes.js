const router = require("express").Router();

router.use("/posts", require("./api/posts.routes"));
router.use("/autors", require("./api/autors.routes"));

module.exports = router;
