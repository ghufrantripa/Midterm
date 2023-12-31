const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.get('/', videoController.getVideos);

module.exports = router;
