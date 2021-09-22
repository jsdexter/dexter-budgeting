const db = require('../db');

function find(collection, id) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id == id) {
      return i;
    }
  }
}

const getCollection = (key) => {
  const dbData = db.getData();
  return dbData[key];
}

const updateTransaction = (req, res) => {
  const transactionObject = getCollection('transactionsRecurring');
  const transactionIndex = find(transactionObject, req.params.id);

  if (typeof transactionIndex !== "undefined") {
    transactionObject[transactionIndex] = {
      ...transactionObject[transactionIndex],
      ...req.body
    };
    db.patchData({ transactionsRecurring: transactionObject });
    res.status(200).send({ ok: true });
  } else {
    res.status(400).send({ ok: false })
  }
};

// const updateBill = (req, res) => {
//     const billObject = getCollection('billsRecurring');
//     const billIndex = find(billObject, req.params.id);

//     if (typeof billIndex !== "undefined") {
//       billObject[billIndex] = { ...billObject[billIndex], ...req.body };
//       db.patchData({ billsRecurring: billObject });
//       res.status(200).send({ ok: true });
//     } else {
//       res.status(400).send({ ok: false });
//     }
// };

// const updateIncome = (req, res) => {
//   const incomeObject = getCollection('incomesRecurring');
//   const incomeIndex = find(incomeObject, req.params.id);

//     if (typeof incomeIndex !== "undefined") {
//       incomeObject[incomeIndex] = { ...incomeObject[incomeIndex], ...req.body };
//       db.patchData({ incomesRecurring: incomeObject });
//       res.status(200).send({ ok: true });
//     } else {
//       res.status(400).send({ ok: false });
//     }
//   };

module.exports = {
  updateTransaction,
  // updateBill,
  // updateIncome
};