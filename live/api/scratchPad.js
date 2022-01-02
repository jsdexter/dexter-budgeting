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