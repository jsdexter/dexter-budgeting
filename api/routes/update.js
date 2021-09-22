const express = require('express');
const router = express.Router();

const updateController = require('../controllers/updateItem');

router.put('/transactions/:id', updateController.updateTransaction);
// router.put('/bills/:id', updateController.updateBill);
// router.put('/incomes/:id', updateController.updateIncome);

module.exports = router;