// const db = require('../db');
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

// const dueDateDisplay = async (req, res) => {
//   // try {
//   const allDueDates = await promisePool(`SELECT date_format(dueDate, "%y-%m-%d") AS "Due Date" FROM transactions.transactionsRecurring WHERE id="c81ec259-4ac0-410c-9f61-4f2997eef20e";`);
//   // const allDueDates = await promisePool(`SELECT DATE(dueDate) AS "Due Date" FROM transactions.transactionsRecurring WHERE id="c81ec259-4ac0-410c-9f61-4f2997eef20e";`);
//   const value = Object.values(allDueDates[0]);

//   // console.log("ttttttttt : " + value);

//   // console.log("0000000000000000000000 ALLDUEDATES " + JSON.stringify(value[0]));
//   // const date = new Date(JSON.stringify(allDueDates));
//   // console.log("This is date ----------------- " + date);
//   // const latestDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear());
//   // const getDate = console.log("This is the new Date::::::::::::::::: " + )
//   // console.log("Here is all the Due Datessssssssssssssssssssss " + JSON.stringify(latestDate));
//   //   const transactionItem = transactionObject[0];

//   //   if (typeof transactionItem !== "undefined") {
//   //     res.status(200).send(transactionItem);
//   //   } else {
//   //     res.status(400).send({ ok: false });
//   //   }
//   // } catch (err) {
//   //   console.log(err);
//   //   res.status(400).send({ ok: false });
//   // }
//   return value;
// }

const allTransactions = async (req, res) => {
  try {
    const transactionObject = await promisePool(`SELECT * FROM transactions.transactionsRecurring;`);
    res.status(200).send(transactionObject);
  } catch (err) {
    console.log(err);
    res.status(400).send({ ok: false });
  }
  // dueDateDisplay();
}

module.exports = {
  allTransactions,
  transactionId,
}