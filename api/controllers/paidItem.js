const { promisePool } = require('../db');

const transactionPaid = async (req, res) => {
    try {
        // Do we even need a payload here to perform a paid update? Maybe to toggle?
        const transactionObject = await promisePool(`SELECT * FROM transactions.transactionsRecurring WHERE id="${req.params.id}";`);
        const transactionItem = transactionObject[0];

        if (typeof transactionItem !== "undefined") {
            const updated = {
                ...transactionObject[transactionItem],
                ...req.body
            }

            await promisePool(`UPDATE transactions.transactionsRecurring SET
                isPaid="${updated.isPaid}", WHERE id="${req.params.id}";`);

            res.status(200).send({ updated });
        }
        // Maybe give a 404 back on an else block here
    } catch (err) {
        console.log(err);
        res.status(400).send({ ok: false });
    }
};

module.exports = {
    transactionPaid,
};
