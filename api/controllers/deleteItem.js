const { promisePool } = require("../db");

//delete a transaction
const deleteTransaction = async (req, res) => {
	try {
		const deletedTransaction = await promisePool(
			`DELETE FROM transactions.transactionsRecurring WHERE id="${req.params.id}";`
		);

		if (req.params.id !== null) {
			res.status(200).send({ deletedTransaction });
		} else {
			res.status(404).send({ ok: false });
		}
	} catch (err) {
		console.log(err);
		res.status(400).send({ ok: false });
	}
};

module.exports = {
	deleteTransaction,
};
