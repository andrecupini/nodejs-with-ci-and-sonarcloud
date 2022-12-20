const express = require('express');
const router = express.Router();
const controller = require('../controllers/operationsController');

router.get('/sum', controller.sum);
router.get('/sub', controller.sub);

module.exports = router; 