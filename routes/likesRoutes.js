const express = require('express');
const router = express.Router();
const {likePost, unlikePost} = require('../controller/updateLikes');
const {getLikesById} = require('../controller/getLikes');

router.get("/:id/getlikes", getLikesById);

router.put("/:id/like", likePost);
router.put("/:id/unlike", unlikePost);


module.exports = router;