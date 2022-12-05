const { promisePool } = require("../db");

const updateTransaction = async (req, res) => {
	try {
		const transactionObject = await promisePool(
			`SELECT * FROM transactions.transactionsRecurring WHERE id="${req.params.id}";`
		);
		const transactionItem = transactionObject[0];

		if (typeof transactionItem !== "undefined") {
			const updated = {
				...transactionObject[transactionItem],
				...req.body,
			};

			await promisePool(`UPDATE transactions.transactionsRecurring SET name="${updated.name}", dueDate="${updated.dueDate}", 
        address="${updated.address}", city="${updated.city}", state="${updated.state}", zip="${updated.zip}",
        accountNumber="${updated.accountNumber}", amountDue="${updated.amountDue}", month="${updated.month}", type="${updated.type}", 
        isPaid="${updated.isPaid}" WHERE id="${req.params.id}";`);

			res.status(200).send({ updated });
		} else {
			res.status(404).send({ ok: false });
		}
	} catch (err) {
		console.log(err);
		res.status(400).send({ ok: false });
	}
};

module.exports = {
	updateTransaction,
};
