const db = require('../db');

const { v4: uuidv4 } = require('uuid');
const validation = require('../validation');

const createTransaction = (req, res) => {
    //TODO Validation
    //TODO: error handling
    // validation(req, res);

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

    return body;
}

module.exports = {
    createTransaction
}
