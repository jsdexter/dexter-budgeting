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

//delete a transaction
const deleteTransaction = (req, res) => {
  const transactionObject = getCollection('transactionsRecurring');
  const transactionIndex = find(transactionObject, req.params.id);

  if (typeof transactionIndex !== 'undefined') {
    db.patchData({ transactionsRecurring: transactionObject })
    res.status(200).send({ ok: true });
  } else {
    res.status(400).send({ ok: false });
  }
};

module.exports = {
  deleteTransaction
}