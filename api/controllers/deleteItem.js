const db = require('../db');

const getCollection = (key) => {
  const dbData = db.getData();
  return dbData[key];
}

function find(collection, id) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id == id) {
      return i;
    }
  }
}

  //delete a bill
  const deleteBill = (req, res) => {
    const billObject = getCollection('billsRecurring');
    const billIndex = find(billObject, req.params.id);
  
    if (typeof billIndex !== 'undefined') {
      billObject.splice(billIndex, 1);
      db.patchData({ billsRecurring: billObject });
      res.status(200).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
  };

  //delete an income
const deleteIncome = (req, res) => {
    const incomeObject = getCollection('incomesRecurring');
    const incomeIndex = find(incomeObject, req.params.id);

    if (typeof incomeIndex !== "undefined") {
      incomeObject.splice(incomeIndex, 1);
      db.patchData({ incomesRecurring: incomeObject });
      res.status(200).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
  };

  module.exports = {
      deleteBill, 
      deleteIncome
  }