const express = require('express');
const router = express.Router();

const createController = require('../controllers/createItem');

router.post('/bills', createController.createBill);
router.post('/incomes', createController.createIncome);
// router.post('/bills', createController.createItem);

module.exports = router;