const db = require('../db');

const { v4: uuidv4 } = require('uuid');
const validation = require('../validation');

const createTransaction = (req, res) => {
    //TODO Validation
    //TODO: error handling
    validation(req, res);

    const transaction = createItem('transactionsRecurring', req.body);
    if (transaction) {
        res.status(200).send(transaction);
    } else {
        res.status(400).send({ ok: false });
    }
};

const createItem = (key, body) => {
    const dbData = db.getData();
    const collection = dbData[key];
    if (!collection) {
        return;
    }

    const id = uuidv4();
    body.id = id;

    collection.push(body);
    db.patchData({
        [key]: collection,
    });

    console.log("Dexter")
    console.log(body)
    console.log(body.id);
    return body;
}

module.exports = {
    createTransaction
    // createBill,
    // createIncome,
}

// const createBill = (req, res) => {
//     // TODO: Validation
//     // TODO: error handling
//     validation(req, res);

//     const billObject = createItem('billsRecurring', req.body);
//     if (billObject) {
//         res.status(200).send(billObject);
//     } else {
//         res.status(400).send({ ok: false });
//     }
// }

// const createIncome = (req, res) => {
//     // TODO: Validation
//     // TODO: error handling
//     validation(req, res);

//     const incomeObject = createItem('incomesRecurring', req.body);
//     if (incomeObject) {
//         res.status(200).send(incomeObject);
//     } else {
//         res.status(400).send({ ok: false });
//     }
// }