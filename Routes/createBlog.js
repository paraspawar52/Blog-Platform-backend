const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
} = require("../Controllers/createBlog");

router.post("/add", createBlog);
router.get("/all", getAllPosts);
router.get("/all/:id", getPostById);
router.put("/edit/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
