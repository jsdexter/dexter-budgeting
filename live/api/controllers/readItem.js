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