const db = require('../db');

function find(collection, id) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id == id) {
      return collection[i];
    }
  }
}

const getCollection = (key) => {
  const dbData = db.getData();
  return dbData[key];
}

const transactionId = (req, res) => {
  const transactionObject = getCollection('transactionsRecurring');
  const transactionItem = find(transactionObject, req.params.id);

  if (typeof transactionItem !== "undefined") {
    res.status(200).send(transactionItem);
  } else {
    res.status(400).send({ ok: false });
  }
};

const allTransactions = (req, res) => {
  const transactionObject = getCollection('transactionsRecurring');
  res.status(200).send(transactionObject);
}

module.exports = {
  allTransactions,
  transactionId,
}

// const billId = (req, res) => {
//   const billObject = getCollection('billsRecurring');
//   const billItem = find(billObject, req.params.id);

//   if (typeof billItem !== "undefined") {
//     res.status(200).send(billItem);
//   } else {
//     res.status(400).send({ ok: false });
//   }
// };

// const incomeId = (req, res) => {
//   const incomeObject = getCollection('incomesRecurring');
//   const incomeItem = find(incomeObject, req.params.id);

//   if (typeof incomeItem !== "undefined") {
//     res.status(200).send(incomeItem);
//   } else {
//     res.status(400).send({ ok: false });
//   }
// };

// const allBills = (req, res) => {
//   const billObject = getCollection('billsRecurring');
//   res.status(200).send(billObject);
// };

// const allIncomes = (req, res) => {
//   const incomeObject = getCollection('incomesRecurring');
//   res.status(200).send(incomeObject);
// };

// module.exports = {
//     allBills,
//     allIncomes,
//     billId,
//     incomeId
// }