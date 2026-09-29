const express = require('express');
const router = express.Router();
const {createComments} = require('../controller/createComments');
const { getComments, getCommentsById } = require('../controller/getComments');

router.post("/createcomment",createComments);

router.get("/getcomments", getComments);
router.get("/getcomment/:id", getCommentsById);

module.exports = router;