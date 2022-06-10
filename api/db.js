const util = require('util');
const pool = require('./database');

const promisePool = util.promisify(pool.query.bind(pool));
// const db = new AbstractJsonHandler('../db.json');

// const dbReadAll = (callback) => {
//     pool.query(`SELECT * FROM transactions.transactionsRecurring;`, callback);
// };
// console.log('this is test: ' + dbReadAll((err, result) => console.log(result)));

// async function dbReadAll() {
//     return new Promise((resolve, reject) => {
//         pool.query(`SELECT * FROM transactions.transactionsRecurring;`, (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };
// console.log('this is test: ' + await dbReadAll());

// async function dbReadAll() {
//     return util.promisify(pool.query.bind(this, `SELECT * FROM transactions.transactionsRecurring;`));
// };
// console.log('this is test: ' + await dbReadAll());

async function dbReadAll() {
    return promisePool(`SELECT * FROM transactions.transactionsRecurring;`);
};

// async function run() {
//     console.log('this is test: ' + JSON.stringify(await dbReadAll(), null, 2));
// }

// run();



// module.exports = {
//     dbAddItem,
//     dbReadAll,
// };

module.exports = {
    promisePool,
    dbReadAll
};

// export dbDeleteItem;

// module.exports = {
//     dbDeleteItem,
//     db
// };

// module.exports = { dbReadItem };
//GOOGLE - how to delete a record in mysql