const db = require('../db');

const getCollection = (key) => {
  const dbData = db.getData();
  return dbData[key];
}

function find(collection, id) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id == id) {
      return collection[i];
    }
  }
}

  //delete a bill
const deleteBill = (req, res) => {
    // let index;
    // const { billsRecurring } = db.getData();
    // for (let i = 0; i < billsRecurring.length; i++) {
    //   if (billsRecurring[i].id == req.params.id) {
    //     index = i;
    //     break;
    //   }
    // }
  
    const billObject = getCollection('billsRecurring');
    const billItem = find(billObject, req.params.id);
  
    if (typeof billItem !== 'undefined') {
      billObject.splice(billItem, 1);
      db.patchData({ billObject });
      res.status(200).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
  };

  //delete an income
const deleteIncome = (req, res) => {
    // let index;
    // const { incomesRecurring } = db.getData();
    // for (let i = 0; i < incomesRecurring.length; i++) {
    //   if (incomesRecurring[i].id == req.params.id) {
    //     index = i;
    //     break;
    //   }
    // }
    
    const incomeObject = getCollection('incomesRecurring');
    const incomeItem = find(incomeObject, req.params.id);

    if (typeof incomeItem !== "undefined") {
      incomeObject.splice(incomeItem, 1);
      db.patchData({ incomeItem });
      res.status(200).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
  };

  module.exports = {
      deleteBill, 
      deleteIncome
  }