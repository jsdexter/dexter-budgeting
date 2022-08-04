const { promisePool } = require('../db');

//delete a transaction
const deleteTransaction = async (req, res) => {
  try {
    const deletedTransaction = await promisePool(`DELETE FROM transactions.transactionsRecurring WHERE id="${req.params.id}";`);
    res.status(200).send({ deletedTransaction });
  }
  catch (err) {
    console.log(err);
    res.status(400).send({ ok: false });
  }
};

module.exports = {
  deleteTransaction
}