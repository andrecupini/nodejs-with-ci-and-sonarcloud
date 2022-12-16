const express = require('express');
const router = express.Router();
const controller = require('../controllers/sumController');

router.get('/', controller.get);

module.exports = router; 