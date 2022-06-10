const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "jdexter",
    password: "D3xt3r15gr8@23",
    connectionLimit: 10,
    database: "transactions",
});

// dateStrings: true,

module.exports = pool;

// const dbConnection = connection.connect(err => {
//     if (err) {
//         throw err;
//     }
//     console.log('MySQL Connected');
// });

// // const pool = createPool({
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "jdexter",
//     password: "D3xt3r15gr8@23",
//     connectionLimit: 10,
//     database: "transactions",
// });

// connection.connect(err => {
//     if (err) {
//         throw err;
//     }
//     console.log('MySQL Connected');
// });

// pool.query(`SELECT * FROM transactions.transactionsRecurring;`, (err, res) => {
//     return console.log(res);
// });
// module.exports = pool;
// ssh -f jasonpi@192.168.68.145 -L 3306:127.0.0.1:3306 -N