// let archive = [];

// const billsRecurring = [
//   {
//     "id": 0,
//     "month": 1,
//     "name": "Mortgage",
//     "address": "123 Main St.",
//     "city": "Naperville",
//     "state": "Il.",
//     "zip": "61540",
//     "accountNumber": 12345,
//     "amountDue": 123.48,
//     "dueDate": "monthly on the 15th"
//   }
// ]

// const incomesRecurring = [
//   {
//     "id": 0,
//     "month": 1,
//     "name": "Mortgage",
//     "amount": 123.23,
//     "dueDate": "every two weeks"
//   }
// ]

// const archive = [
//   {
//     "type": bill,
//     "id": 0,
//     "month": 1,
//     "name": "Mortgage",
//     "address": "123 Main St.",
//     "city": "Naperville",
//     "state": "Il.",
//     "zip": "61540",
//     "accountNumber": 12345,
//     "amountDue": 123.48,
//     "timestamp": 32168489451
  // },
  // {
//     "type": income,
//     "id": 0,
//     "month": 1,
//     "name": "Mortgage",
//     "amount": 123.23,
//     "timestamp": 564846513215 
//   }
// ]

// app.get(
//   ['/api/bills/?month=2',
//   '/api/incomes/?month=2'], (req, res) => {
//   console.log('month/february called!');
//   figure out what I need to send to display all income/bills for a specific month
//   //res.status(200).send()//what do I need to send here?) will the below work? 
//   //or I need to define what "month" is and just display everything with the month of "x"
//   res.status(200).send(month[req.params.month]);
// });
//or
// app.get('/api/month/:id', (req, res) => {
//   console.log('month/february called!');

//   if(typeof req.body !== 'object') {
//     return res.status(400).send({ error: 'not an object' });
//   }

//   const month = req.body;
//   month.id = month[month];
//   months.push(month);
//   res.status(200).send(month[req.params.id]);
// });

//update a bill
// app.put('/api/bills/:id', (req, res) => {
//   console.log('api/bills/:id has been updated');
//   //something like this below?
//   const { id } = req.params;
//   // const bills = { name: req.body.name, done: req.body.done };
//   billList.updateById(id, bills)
//     .then(res.status(200).json([]))
//     .catch((error) => console.log(error));
// });

//Create

//create a bill - done
// app.post('/api/bills', (req, res) => {
//   const bill = req.body.bill;
//   console.log('Adding bill!', bill);
//   bills.push(bill);
//   res.json('bill added');
// });

// //create an income - done
// app.post('/api/incomes', (req, res) => {
//   const income = req.body.income;
//   console.log('Adding income', income);
//   incomes.push(income);
//   res.json('income added');
// });

// //Read 

// //read all bills - done
// app.get('api/bills', (req, res) => {
//   console.log('api/bills called!')
//   res.json(bills);
// });

// //read bill with a specific ID - done
// app.get('/api/bills/:id', (req, res) => {
//   console.log('api/bills/:id called!');
//   res.json(bills[id]);
// })

// //read all income - done
// app.get('api/incomes', (req, res) => {
//   console.log('api/incomes called!');
//   res.json(incomes);
// });

// //read income with a specific ID - done
// app.get('api/income/:id', (req, res) => {
//   console.log('api/income/:id called!');
//   res.json(incomes[id]);
// });

// //homepage
// app.get('api/bills/?month=2', (req, res) => {
//   console.log('api/bills/?month=2 called!');
//   //need to display all bills from month 2
// });

// app.get('/api/incomes/?month=2', (req, res) => {
//   console.log('api/bills/?month=2 called!');
//   //need to display all income from month 2
// })

// //Update

// //update a bill
// app.put('/api/bills/:id', (req, res) => {
//   console.log('api/bills/:id has been updated');
//   //something like this below?
//   const { id } = req.params;
//   const bills = { name: req.body.name };
//   billList.updateById(id, bills)
//     .then(res.status(200).json([]))
//     .catch((error) => console.log(error));
// });

// //update an income
// app.put('/api/incomes/:id', (req, res) => {
//   console.log('api/incomes/:id has been updated');
//   //something like this below?
//   const { id } = req.params;
//   const income = { name: req.body.name, done: req.body.done };
//   incomeList.updateById(id, income)
//     .then(res.status(200).json([]))
//     .catch((error) => console.log(error));
// });

// //Delete

// //delete a bill
// app.delete('/api/bills/:id', (req, res) => {
//   const { id } = req.params;
//   repository.deleteById(id).then((ok) => {
//     console.log(ok);
//     console.log(`Deleted bill with id: ${id}`);
//     res.status(200).json([]);
//   }).catch((error) => console.log(error));
// });

// //delete an income
// app.delete('/api/incomes/:id', (req, res) => {
//   const { id } = req.params;
//   repository.deleteById(id).then((ok) => {
//     console.log(ok);
//     console.log(`Deleted income with id: ${id}`);
//     res.status(200).json([]);
//   }).catch((error) => console.log(error));
// });


//This is what the updateItem page used to look like prior to the refactor 
// const db = require('../db');

// const updateBill = (req, res) => {
//     let index;
//     const { billsRecurring } = db.getData();
//     for (let i = 0; i < billsRecurring.length; i++) {
//       if (billsRecurring[i].id == req.params.id) {
//         index = i;
//         break;
//       }
//     }
  
//     if (typeof index !== "undefined") {
//       billsRecurring[index] = { ...billsRecurring[index], ...req.body };
//       db.patchData({ billsRecurring });
//       res.status(200).send({ ok: true });
//     } else {
//       res.status(400).send({ ok: false });
//     }
// };

// const updateIncome = (req, res) => {
//     let index;
//     const { incomesRecurring } = db.getData();
//     for (let i = 0; i < incomesRecurring.length; i++) {
//       if (incomesRecurring[i].id == req.params.id) {
//         index = i;
//         break;
//       }
//     }
  
//     if (typeof index !== "undefined") {
//       incomesRecurring[index] = { ...incomesRecurring[index], ...req.body };
//       db.patchData({ incomesRecurring });
//       res.status(400).send({ ok: true });
//     } else {
//       res.status(400).send({ ok: false });
//     }
//   };

// module.exports = {
//     updateBill,
//     updateIncome
// };

// const updateItem = (req, res, itemObj) => {
//     let index;
//     for (let i = 0; i < itemObj.length; i++) {
//         if (itemObj[i].id == req.params.id) {
//           index = i;
//           break;
//         }
//       }

//       if (typeof index !== "undefined") {
//         itemObj[index] = { ...itemObj[index], ...req.body };
//         db.patchData({ itemObj });
//         res.status(200).send({ ok: true });
//       } else {
//         res.status(400).send({ ok: false });
//       }
// }

//End updateItem page

//DeleteItem Page
// const db = require('../db');

// const getCollection = (key) => {
//   const dbData = db.getData();
//   return dbData[key];
// }

// function find(collection, id) {
//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i].id == id) {
//       // return collection[i];
//       return i;
//     }
//   }
// }

//   //delete a bill
//   const deleteBill = (req, res) => {
//     const billObject = getCollection('billsRecurring');
//     const billIndex = find(billObject, req.params.id);
  
//     if (typeof billIndex !== 'undefined') {
//       billObject.splice(billIndex, 1);
//       db.patchData({ billsRecurring: billObject });
//       res.status(200).send({ ok: true });
//     } else {
//       res.status(400).send({ ok: false });
//     }
//   };

//   //delete an income
// const deleteIncome = (req, res) => {
//     // let index;
//     // const { incomesRecurring } = db.getData();
//     // for (let i = 0; i < incomesRecurring.length; i++) {
//     //   if (incomesRecurring[i].id == req.params.id) {
//     //     index = i;
//     //     break;
//     //   }
//     // }
    
//     const incomeObject = getCollection('incomesRecurring');
//     const incomeItem = find(incomeObject, req.params.id);

//     if (typeof incomeItem !== "undefined") {
//       incomeObject.splice(incomeItem, 1);
//       db.patchData({ incomeItem });
//       res.status(200).send({ ok: true });
//     } else {
//       res.status(400).send({ ok: false });
//     }
//   };

//   module.exports = {
//       deleteBill, 
//       deleteIncome
//   }

//Update an item
// const updateItem = (req, res, itemObj) => {
  //     let index;
  //     for (let i = 0; i < itemObj.length; i++) {
  //         if (itemObj[i].id == req.params.id) {
  //           index = i;
  //           break;
  //         }
  //       }
  
  //       if (typeof index !== "undefined") {
  //         itemObj[index] = { ...itemObj[index], ...req.body };
  //         db.patchData({ itemObj });
  //         res.status(200).send({ ok: true });
  //       } else {
  //         res.status(400).send({ ok: false });
  //       }
  // }

  //CreateItem
  // const createTransaction = (req, res) => {
//     //TODO: Validation
//     //TODO: error handling

//     const transaction = createItem('transactionsRecurring', req.body);
//     if (transaction) {
//         res.status(200).send(transaction);
//     } else {
//         res.status(400).send({ ok: false });
//     }
// };


// const id = uuidv4();
// body.id = id;

// collection.push(body);
// db.patchData({
//     [key]: collection,
// });

// return body;
// }

//DeleteItem
// const getCollection = (key) => {
//   const dbData = db.getData();
//   // const dbData = db.dbDeleteItem();
//   return dbData[key];
// }

// function find(collection, id) {
//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i].id == id) {
//       return i;
//     }
//   }
// }
// const transactionObject = getCollection('transactionsRecurring');
  // const transactionIndex = find(transactionObject, req.params.id);

  // if (typeof transactionIndex !== 'undefined') {
  //   db.patchData({ transactionsRecurring: transactionObject })
  //   res.status(200).send({ ok: true });
  // } else {
  //   res.status(400).send({ ok: false });
  // }

  //ReadItem
  // const dueDateDisplay = async (req, res) => {
//   // try {
//   const allDueDates = await promisePool(`SELECT date_format(dueDate, "%y-%m-%d") AS "Due Date" FROM transactions.transactionsRecurring WHERE id="c81ec259-4ac0-410c-9f61-4f2997eef20e";`);
//   // const allDueDates = await promisePool(`SELECT DATE(dueDate) AS "Due Date" FROM transactions.transactionsRecurring WHERE id="c81ec259-4ac0-410c-9f61-4f2997eef20e";`);
//   const value = Object.values(allDueDates[0]);


//   // const date = new Date(JSON.stringify(allDueDates));
//   // const latestDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear());
//   // const getDate = console.log("This is the new Date::::::::::::::::: " + )
//   //   const transactionItem = transactionObject[0];

//   //   if (typeof transactionItem !== "undefined") {
//   //     res.status(200).send(transactionItem);
//   //   } else {
//   //     res.status(400).send({ ok: false });
//   //   }
//   // } catch (err) {
//   //   console.log(err);
//   //   res.status(400).send({ ok: false });
//   // }
//   return value;
// }

//UpdateItem
// const updateTransactions = (req, res) => {
//   const transactionObject = getCollection('transactionsRecurring');
//   const transactionIndex = find(transactionObject, req.params.id);

//   if (typeof transactionIndex !== "undefined") {
//     transactionObject[transactionIndex] = {
//       ...transactionObject[transactionIndex],
//       ...req.body
//     };
//     // db.patchData({ transactionsRecurring: transactionObject });
//     promisePool(`UPDATE transactions.transactionsRecurring SET name="${transactionItem.name}", dueDate="${transactionItem.dueDate}", 
//     address="${transactionItem.address}", city="${transactionItem.city}", state="${transactionItem.state}", zip="${transactionItem.zip}",
//     accountNumber="${transactionItem.accountNumber}", amountDue="${transactionItem.amountDue}", month="${transactionItem.month}", type="${transactionItem.type}"
//     id="${transactionItem.id}" WHERE id="${transactionItem.id}";`);
//     res.status(200).send({ ok: true });
//   } else {
//     res.status(400).send({ ok: false })
//   }
// };
// function find(collection, id) {
//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i].id == id) {
//       return i;
//     }
//   }
// }

// const getCollection = (key) => {
//   const dbData = db.getData();
//   return dbData[key];
// }

//db.js
// const db = new AbstractJsonHandler('../db.json');

// const dbReadAll = (callback) => {
//     pool.query(`SELECT * FROM transactions.transactionsRecurring;`, callback);
// };

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

// async function dbReadAll() {
//     return util.promisify(pool.query.bind(this, `SELECT * FROM transactions.transactionsRecurring;`));
// };

//server.js
// function runMigrations() {
//     const data = dbReadAll;
//     // if (!data.transactionsRecurring) {
//     //     db.patchData({ transactionsRecurring: [] });
//     // }
// }
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

//MonthDropdown.js
  // const months = {}
  // transactions.forEach((transaction) => {
  //   const date = new Date(transaction.dueDate);
  //   const key = new Intl.DateTimeFormat("en-US", monthYear).format(date);
  //   months[key] = `${date.getMonth()}-${date.getDate()}`;
  // });

  // { 'March 2021': '03-2021' }


  // const months = transactions.map((transaction) => {
  //   return new Intl.DateTimeFormat("en-US", monthYear).format(
  //     new Date(transaction.dueDate)
  //   );
  // });

  // months = [ March 2021, March 2021, March 2021, April 2021, April 2021 ]

  // function onlyUnique(value, index, self) {
  //   return self.indexOf(value) === index;
  // }

  // // usage example:
  // var a = ["a", 1, "a", 2, "1"];
  // var unique = a.filter(onlyUnique);

  // console.log(unique); // ['a', 1, 2, '1']

  // // _.unique(months)


  // Generate last 12 months

  // let months = [];
  // let now = Date.now(); // 56465453132154

  // let monthDuration = 1000 * 60 * 60 * 24 * 30.5;
  // for (let i = 0; i <= 12; i++) {
  //   // 0, 1, 2, 3, 4, 5 ... 12

  //   const newDate = new Intl.DateTimeFormat("en-US", monthYear).format(new Date(now - (monthDuration * i)));
  //   months.push(newDate);
  // }


  // _.map(months, (key, val) => {

  // });

  //FormEditBill.js
  // function FormEditBill() {
//     return (
//         <Form>
//             <Title>Edit Bill</Title>
//             <Heading>
//                 <label>Due Date:</label>
//             </Heading>
//             <Input type="date" name="dueDate" required></Input>
//             <Heading>
//                 <label>Pay To:</label>
//             </Heading>
//             <Input type="text" name="payTo" value="City of Naperville Utilities" required />
//             <Heading>
//                 <label>Payee Address:</label>
//             </Heading>
//             <Input type="text" name="address" required value="123 Main Naperville, IL. 60540" />
//             <Heading>
//                 <label>Account #:</label>
//             </Heading>
//             <Input type="text" name="account" value="1283921327" />
//             <Heading>
//                 <label>Amount:</label>
//             </Heading>
//             <Input type="number" name="amount" value="148.00" />
//             <Heading>
//                 <label>Recurring:</label>
//             </Heading>
//             <SelectOption value="Monthly">
//                 <option value="Monthly">Monthly</option>
//                 <option value="BiMonthly">BiMonthly</option>
//                 <option value="Weekly">Weekly</option>
//             </SelectOption>
//             <Button type="submit">Save</Button>
//         </Form>
//     );
// }

//FormEditIncome.js
// function FormEditIncome() {
//     return (
//         <Form>
//             <Title>Edit Income</Title>
//             <Heading>
//                 <label>Name:</label>
//             </Heading>
//             <Input type="text" name="name" value="Jason Pay" required />
//             <Heading>
//                 <label>Pay Date:</label>
//             </Heading>
//             <Input type="date" name="dueDate" required />
//             <Heading>
//                 <label>Amount:</label>
//             </Heading>
//             <Input type="number" name="amount" value="148.00" />
//             <Heading>
//                 <label>Recurring:</label>
//             </Heading>
//             <SelectOption value="BiMonthly">
//                 <option value="Monthly">Monthly</option>
//                 <option value="BiMonthly">BiMonthly</option>
//                 <option value="Radish">Weekly</option>
//             </SelectOption>
//             <Button type="submit">Save</Button>
//         </Form>
//     );
// }

//ModelEditBill.js
// export const ModalEditBill = ({ showModal, setShowModal }) => {
//   return ReactDOM.createPortal(
//     <div>
//       {showModal ? (
//         <ModalBackground>
//           <ModalWrapper showModal={showModal}>
//             <CloseModalButton
//               aria-label="close modal"
//               onClick={setShowModal}
//             >
//               X
//             </CloseModalButton>
//             <ModalContent>
//               <FormTransaction>Testing</FormTransaction>
//             </ModalContent>
//           </ModalWrapper>
//         </ModalBackground>
//       ) : null}
//     </div>,
//     document.getElementById("portal")
//   );
// };