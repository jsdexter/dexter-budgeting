const express = require('express');
const router = express.Router();

const paidController = require('../controllers/paidItem');

router.put('/transactions/:id', paidController.transactionPaid);

module.exports = router;