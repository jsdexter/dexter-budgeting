const { v4: uuidv4 } = require('uuid');
const { promisePool } = require('../db');

const createTransaction = async (req, res) => {
    try {
        const id = uuidv4();

        // We need to setup an ORM so we don't have possibility of SQL injection
        const transaction = await promisePool(`INSERT INTO transactions.transactionsRecurring
            (name, dueDate, address, city, state, zip, accountNumber,
            amountDue, month, type, id, isPaid) VALUES ("${req.body.name}", "${req.body.dueDate}", "${req.body.address}",
            "${req.body.city}", "${req.body.state}", ${req.body.zip}, "${req.body.accountNumber}", ${req.body.amountDue},
            "${req.body.month}", "${req.body.type}", "${id}", ${0});`, req.body);

        //TODO: Validation
        //TODO: error handling

        if (transaction) {
            res.status(200).send({ transaction });
        } else {
            res.status(400).send({ ok: false });
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({ ok: false });
    }
};

module.exports = {
    createTransaction
}
