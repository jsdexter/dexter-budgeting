const express = require('express');
const router = express.Router();

const updateController = require('../controllers/updateItem');

router.put('/transactions/:id', updateController.updateTransaction);

module.exports = router;