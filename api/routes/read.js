const express = require('express');
const AbstractJsonHandler = require('../AbstractJsonHandler');

// const server = require('../server');

// const { route } = require('./root');

const router = express.Router();
const db = new AbstractJsonHandler('../db.json');

  //read all bills
  router.get('/api/bills', (req, res) => {
    console.log("api/bills called!");
    const { billsRecurring } = db.getData();
    res.status(200).send(billsRecurring);
  });

  //read bill with a specific id
router.get('/api/bills/:id', (req, res) => {
    console.log("api/bills/:id called!");
    const { billsRecurring } = db.getData();
  
    let index;
    for (let i = 0; i < billsRecurring.length; i++) {
      if (billsRecurring[i].id == req.params.id) {
        index = i;
      }
    }
  
    if (typeof index !== "undefined") {
      res.status(200).send(billsRecurring[index]);
    } else {
      res.status(400).send({ ok: false });
    }
  });

  //read all incomes
router.get('/api/incomes', (req, res) => {
    console.log("api/incomes called!");
    const { incomesRecurring } = db.getData();
    res.status(200).send(incomesRecurring);
  });
  
  //read income with a specific id
  router.get('/api/incomes/:id', (req, res) => {
    console.log("api/incomes/:id called!");
    const { incomesRecurring } = db.getData();
  
    let index;
    for (let i = 0; i < incomesRecurring.length; i++) {
      if (incomesRecurring[i].id == req.params.id) {
        index = i;
      }
    }
  
    if (typeof index !== "undefined") {
      res.status(200).send(incomesRecurring[index]);
    } else {
      res.status(400).send({ ok: false });
    }
  });

  module.exports = router;