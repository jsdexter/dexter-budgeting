const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3070;

const rootRouter = require('./routes/root');
const createsRouter = require('./routes/create');
const readsRouter = require('./routes/read');
const updatesRouter = require('./routes/update');
const deletesRouter = require('./routes/delete');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
    res.header('access-control-allow-credentials', 'true');
    res.header('access-control-max-age', '86400');
    res.header('access-control-allow-headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
});

app.use(rootRouter);
app.use('/api', createsRouter);
app.use('/api', readsRouter);
app.use('/api', updatesRouter);
app.use('/api', deletesRouter);

// function runMigrations() {
//     const data = dbReadAll;
//     // if (!data.transactionsRecurring) {
//     //     db.patchData({ transactionsRecurring: [] });
//     // }
// }

async function init() {
    // await db.init();
    // runMigrations();
    app.listen(PORT);
}

init();

// const mysql = require('mysql2');
// const { Client } = require('ssh2');

// const sshClient = new Client();

// const dbServer = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// };

// const tunnelConfig = {
//     // host: process.env.DB_SSH_HOST,
//     host: '192.168.68.145',
//     port: 22,
//     // username: process.env.DB_SSH_USER,
//     username: 'jasonpi',
//     // password: process.env.DB_SSH_PASSWORD
//     password: 'D3xt3r15gr8@23'
// };

// const forwardConfig = {
//     srcHost: '127.0.0.1',
//     srcPort: 3306,
//     dstHost: dbServer.host,
//     dstPort: dbServer.port
// };

// const SSHConnection = new Promise((resolve, reject) => {
//     sshClient.on('ready', () => {
//         sshClient.forwardOut(
//             forwardConfig.srcHost,
//             forwardConfig.srcPort,
//             forwardConfig.dstHost,
//             forwardConfig.dstPort,
//             (err, stream) => {
//                 if (err) reject(err);
//                 const updatedDbServer = {
//                     ...dbServer,
//                     stream
//                 };
//                 const connection =
//                     mysql.createConnection(updatedDbServer);
//                 connection.connect((error) => {
//                     if (error) {
//                         reject(error);
//                     }
//                     resolve(connection);
//                 });
//             });
//     }).connect(tunnelConfig);
// });

// const dbMysql = mysql.createConnection({
//     host: "localhost",
//     user: "jdexter",
//     password: "D3xt3r15gr8@23",
//     database: "transactions"
// });

// dbMysql.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("MySql Connected");
// });

// const app = express();

// app.get("/createdb", (req, res) => {
//     let sql = "CREATE Dexter Transactions";
//     dbMysql.query(sql, (err) => {
//         if (err) {
//             throw err;
//         }
//         res.send("Database Created");
//     });
// });

// app.get("/createtransactions", (req, res) => {
//     let sql =
//         "CREATE TABLE transactions(dueDate date, name VARCHAR(25), address VARCHAR(50), city VARCHAR(20), state CHAR(2), zip INT(5), accountNumber VARCHAR(30), amountDue INT(20), month CHAR(12), type CHAR(6))";

//     dbMysql.query(sql, (err) => {
//         if (err) {
//             throw err;
//         }
//         res.send("Transactions Table Created");
//     });
// });

// app.get("/transaction1", (req, res) => {
//     let post = {
//         dueDate: "2022/04/05", name: "March 26th transaction", address: "1111 Main St.", city: "AAAAABB", state: "AZ", zip: "32322", accountNumber: "445544",
//         amountDue: "113.44", month: "Monthly", type: "Bill"
//     };
//     let sql = "INSERT INTO transactions SET?";
//     let query = dbMysql.query(sql, post, (err) => {
//         if (err) {
//             throw err;
//         }
//         res.send("Transaction 1 added");
//     });
// });

// app.listen("3000", () => {
//     console.log("Server started on port 3000");
// });

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
//     connection.query(sql, function (err, result) {
//         if(err) throw err;
//         console.log("Result: " + result);
//     });
// });