const express = require('express');
const router = express.Router();
const validation = require('../validation');

const createController = require('../controllers/createItem');

router.post('/transactions', validation, createController.createTransaction);

module.exports = router;