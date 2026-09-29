const express = require('express');
const { createPost } = require('../controller/createPost');
const { getAllPosts, getPostById } = require('../controller/getPost');
const router = express.Router();

router.post("/createpost", createPost);

router.get("/getposts", getAllPosts);

router.get("/getpost/:id", getPostById);

module.exports = router;