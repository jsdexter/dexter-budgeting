const db = require('../db');

function find(collection, id) {
  for (let i = 0; i < collection.length; i++) {
    if(collection[i].id == id) {
      return i;
    }
  }
}

const getCollection = (key) => {
  const dbData = db.getData();
  return dbData[key];
}

const updateBill = (req, res) => {
    const billObject = getCollection('billsRecurring');
    const billIndex = find(billObject, req.params.id);
  
    if (typeof billIndex !== "undefined") {
      billObject[billIndex] = { ...billObject[billIndex], ...req.body };
      db.patchData({ billsRecurring: billObject });
      res.status(200).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
};

const updateIncome = (req, res) => {
  const incomeObject = getCollection('incomesRecurring');
  const incomeIndex = find(incomeObject, req.params.id);
  
    if (typeof incomeIndex !== "undefined") {
      incomeObject[incomeIndex] = { ...incomeObject[incomeIndex], ...req.body };
      db.patchData({ incomesRecurring: incomeObject });
      res.status(200).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
  };

module.exports = {
    updateBill,
    updateIncome
};