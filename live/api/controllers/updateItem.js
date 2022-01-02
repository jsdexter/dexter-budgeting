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

module.exports = {
  updateTransaction,
};