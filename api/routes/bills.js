const express = require('express');
const bodyParser = require('body-parser');
const AbstractJsonHandler = require('../AbstractJsonHandler');
const db = require('../db.json')

// const server = require('../server');

// const { route } = require('./root');

const router = express.Router();
// const db = new AbstractJsonHandler('../db.json');
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

  module.exports = router;
