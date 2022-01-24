const express = require('express');
const router = express.Router();

const readController = require('../controllers/readItem');

// router.get('/transactions', readController.allTransactions);
router.get('/transactions', readController.allTransactions);
router.get('/transactions/:id', readController.transactionId);

module.exports = router;