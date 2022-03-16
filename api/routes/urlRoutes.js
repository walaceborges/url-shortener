const express = require('express');
const rescue = require('express-rescue');
const shortnerController = require('../controllers/shortnerController');
const validationUrl = require('../middlewares/validateUrl');

const router = express.Router();

router.post('/', validationUrl, rescue(shortnerController.postUrlController));
router.get('/:newUrl', rescue(shortnerController.getUrlController));

module.exports = router;