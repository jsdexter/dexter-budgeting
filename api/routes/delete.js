const express = require('express');
const bodyParser = require('body-parser');
const AbstractJsonHandler = require('../AbstractJsonHandler');

// const server = require('../server');

// const { route } = require('./root');

const router = express.Router();
const db = new AbstractJsonHandler('../db.json');
const {v4 : uuidv4} = require('uuid');

  //delete a bill
  router.delete('/api/bills/:id', (req, res) => {
    let index;
    const { billsRecurring } = db.getData();
    for (let i = 0; i < billsRecurring.length; i++) {
      if (billsRecurring[i].id == req.params.id) {
        index = i;
        break;
      }
    }
  
    if (typeof index !== 'undefined') {
      billsRecurring.splice(index, 1);
      db.patchData({ billsRecurring });
      res.status(200).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
  });

  //delete an income
router.delete('/api/incomes/:id', (req, res) => {
    let index;
    const { incomesRecurring } = db.getData();
    for (let i = 0; i < incomesRecurring.length; i++) {
      if (incomesRecurring[i].id == req.params.id) {
        index = i;
        break;
      }
    }
  
    if (typeof index !== "undefined") {
      incomesRecurring.splice(index, 1);
      db.patchData({ incomesRecurring });
      res.status(200).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
  });

  module.exports = router;