const express = require('express');
const router = express.Router();
const {createComments} = require('../controller/createComments');

router.post("/createcomment",createComments);

module.exports = router;