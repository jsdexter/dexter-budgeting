const express = require('express');
const router = express.Router();

const deleteController = require('../controllers/deleteItem');

router.delete('/bills/:id', deleteController.deleteBill);
router.delete('/incomes/:id', deleteController.deleteIncome);

module.exports = router;