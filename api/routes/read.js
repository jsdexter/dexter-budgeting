const express = require('express');
const router = express.Router();

const readController = require('../controllers/readItem');

// router.get('/bills', readController.allBills);
// router.get('/incomes', readController.allIncomes);
// router.get('/bills/:id', readController.billId);
// router.get('/incomes/:id', readController.incomeId);
router.get('/transactions', readController.allTransactions);
router.get('/transactions/:id', readController.transactionId);

module.exports = router;