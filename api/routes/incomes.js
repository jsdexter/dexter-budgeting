const express = require('express');
const AbstractJsonHandler = require('../AbstractJsonHandler');

// const { route } = require('./root');

const router = express.Router();
const db = new AbstractJsonHandler('../db.json');
const {v4 : uuidv4} = require('uuid');

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