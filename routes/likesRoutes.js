const express = require('express');
const router = express.Router();
const {likePost} = require('../controller/updateLikes');
const {getLikesById} = require('../controller/getLikes');

router.put("/:id/like", likePost);
// router.post("/:id/unlike", updateLikes);

router.get("/:id/getlikes", getLikesById);

module.exports = router;