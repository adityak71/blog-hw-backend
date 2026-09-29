const express = require('express');
const { createPost } = require('../controller/createPost');
const router = express.Router();

router.post("/createpost",createPost);



module.exports = router;