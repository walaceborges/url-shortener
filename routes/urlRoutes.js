const express = require('express');
const rescue = require('express-rescue');
const shortnerController = require('../controllers/shortnerController');

const router = express.Router();

router.post('/', rescue(shortnerController.postUrlController));
router.get('/:newUrl', rescue(shortnerController.getUrlController));

module.exports = router;