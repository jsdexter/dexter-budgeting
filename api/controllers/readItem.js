const { promisePool } = require('../db');

const transactionId = async (req, res) => {
  try {
    const transactionObject = await promisePool(`SELECT * FROM transactions.transactionsRecurring WHERE id=${req.params.id};`);
    const transactionItem = transactionObject[0];

    if (typeof transactionItem !== "undefined") {
      res.status(200).send(transactionItem);
    } else {
      res.status(400).send({ ok: false });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ ok: false });
  }
};

const allTransactions = async (req, res) => {
  try {
    const transactionObject = await promisePool(`SELECT * FROM transactions.transactionsRecurring;`);
    res.status(200).send(transactionObject);
  } catch (err) {
    console.log(err);
    res.status(400).send({ ok: false });
  }
}

module.exports = {
  allTransactions,
  transactionId,
}