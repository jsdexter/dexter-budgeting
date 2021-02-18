const express = require('express');
// const AbstractJsonHandler = require('../AbstractJsonHandler');
// const db = require('../../db.json');
// const server = require('../server');

// const { route } = require('./root');

const router = express.Router();
// const db = new AbstractJsonHandler('../../db.json');
const {v4 : uuidv4} = require('uuid');

//create a bill
router.post('/api/bills', (req, res) => {
    // TODO: Validation
    // TODO: error handling
    if (typeof req.body !== 'object') {
      return res.status(400).send({ error: 'not an object' });
    }
  
    const bill = req.body;
    const itemId = uuidv4();
    bill.id = itemId;

    const { billsRecurring } = db.getData();
    billsRecurring.push(bill);
    db.patchData({ billsRecurring });
  
    console.log('Adding bill!');
    res.status(200).send(bill);
  });

 //create an income
 router.post('/api/incomes', (req, res) => {
    //TODO: validation
    if (typeof req.body !== "object") {
      return res.status(400).send({ error: "not an object" });
    }

    const income = req.body;
    const itemId = uuidv4();
    income.id = itemId;

    const { incomesRecurring } = db.getData();
    incomesRecurring.push(income);
    db.patchData({ incomesRecurring });
    
    console.log("Adding income!");
    res.status(200).send(income);
  });

  module.exports = router;