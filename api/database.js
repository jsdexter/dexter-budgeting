const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "jdexter",
    password: "D3xt3r15gr8@23",
    connectionLimit: 10,
    database: "transactions",
});

module.exports = pool;

// ssh -f jasonpi@192.168.68.145 -L 3306:127.0.0.1:3306 -N