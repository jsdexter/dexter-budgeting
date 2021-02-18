const express = require('express');
const AbstractJsonHandler = require('../AbstractJsonHandler');

// const server = require('../server');

// const { route } = require('./root');

const router = express.Router();
const db = new AbstractJsonHandler('../db.json');

  //update a bill
  router.put('/api/bills/:id', (req, res) => {
    let index;
    const { billsRecurring } = db.getData();
    for (let i = 0; i < billsRecurring.length; i++) {
      if (billsRecurring[i].id == req.params.id) {
        index = i;
        break;
      }
    }
  
    if (typeof index !== "undefined") {
      billsRecurring[index] = { ...billsRecurring[index], ...req.body };
      db.patchData({ billsRecurring });
      res.status(200).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
  });

  //update an income
router.put('/api/incomes/:id', (req, res) => {
    let index;
    const { incomesRecurring } = db.getData();
    for (let i = 0; i < incomesRecurring.length; i++) {
      if (incomesRecurring[i].id == req.params.id) {
        index = i;
        break;
      }
    }
  
    if (typeof index !== "undefined") {
      incomesRecurring[index] = { ...incomesRecurring[index], ...req.body };
      db.patchData({ incomesRecurring });
      res.status(400).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
  });

  module.exports = router;