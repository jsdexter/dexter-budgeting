const { promisePool } = require('../db');

// function find(collection, id) {
//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i].id == id) {
//       return i;
//     }
//   }
// }

// const getCollection = (key) => {
//   const dbData = db.getData();
//   return dbData[key];
// }

const updateTransaction = async (req, res) => {
  try {
    const transactionObject = await promisePool(`SELECT * FROM transactions.transactionsRecurring WHERE id="${req.params.id}";`);
    const transactionItem = transactionObject[0];

    if (typeof transactionItem !== "undefined") {
      const updated = {
        ...transactionObject[transactionItem],
        ...req.body
      }

      await promisePool(`UPDATE transactions.transactionsRecurring SET name="${updated.name}", dueDate="${updated.dueDate}", 
        address="${updated.address}", city="${updated.city}", state="${updated.state}", zip="${updated.zip}",
        accountNumber="${updated.accountNumber}", amountDue="${updated.amountDue}", month="${updated.month}", type="${req.params.type}"
        WHERE id="${req.params.id}";`);

      res.status(200).send({ updated });
    }

  } catch (err) {
    console.log(err);
    res.status(400).send({ ok: false });
  }
}

// const updateTransactions = (req, res) => {
//   const transactionObject = getCollection('transactionsRecurring');
//   const transactionIndex = find(transactionObject, req.params.id);

//   if (typeof transactionIndex !== "undefined") {
//     transactionObject[transactionIndex] = {
//       ...transactionObject[transactionIndex],
//       ...req.body
//     };
//     // db.patchData({ transactionsRecurring: transactionObject });
//     promisePool(`UPDATE transactions.transactionsRecurring SET name="${transactionItem.name}", dueDate="${transactionItem.dueDate}", 
//     address="${transactionItem.address}", city="${transactionItem.city}", state="${transactionItem.state}", zip="${transactionItem.zip}",
//     accountNumber="${transactionItem.accountNumber}", amountDue="${transactionItem.amountDue}", month="${transactionItem.month}", type="${transactionItem.type}"
//     id="${transactionItem.id}" WHERE id="${transactionItem.id}";`);
//     res.status(200).send({ ok: true });
//   } else {
//     res.status(400).send({ ok: false })
//   }
// };

module.exports = {
  updateTransaction,
};