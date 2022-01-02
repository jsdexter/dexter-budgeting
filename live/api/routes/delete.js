const express = require('express');
const router = express.Router();

const deleteController = require('../controllers/deleteItem');

router.delete('/transactions/:id', deleteController.deleteTransaction);

module.exports = router;