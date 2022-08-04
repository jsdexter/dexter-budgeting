const util = require('util');
const pool = require('./database');

const promisePool = util.promisify(pool.query.bind(pool));

async function dbReadAll() {
    return promisePool(`SELECT * FROM transactions.transactionsRecurring;`);
};

module.exports = {
    promisePool,
    dbReadAll
};