const db = require('../db');
const { promisePool } = require('../db');
// import { dbDeleteItem } from '../db';

const getCollection = (key) => {
  const dbData = db.getData();
  // const dbData = db.dbDeleteItem();
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
const deleteTransaction = async (req, res) => {
  try {
    // const transactionObject = await promisePool(`SELECT * FROM transactions.transactionsRecurring WHERE id="${req.params.id}";`);
    // const transactionItem = transactionObject[0];

    // if (typeof transactionItem !== "undefined") {
    //   transactionObject[transactionItem] = {
    //     ...transactionObject[transactionItem],
    //     ...req.body
    //   }
    const deletedTransaction = await promisePool(`DELETE FROM transactions.transactionsRecurring WHERE id="${req.params.id}";`);
    res.status(200).send({ deletedTransaction });
    // }
  }
  catch (err) {
    console.log(err);
    res.status(400).send({ ok: false });
  }
  // const transactionObject = getCollection('transactionsRecurring');
  // const transactionIndex = find(transactionObject, req.params.id);

  // if (typeof transactionIndex !== 'undefined') {
  //   db.patchData({ transactionsRecurring: transactionObject })
  //   res.status(200).send({ ok: true });
  // } else {
  //   res.status(400).send({ ok: false });
  // }
};

module.exports = {
  deleteTransaction
}