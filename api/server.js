const express = require('express');
const bodyParser = require('body-parser');
const AbstractJsonHandler = require('./AbstractJsonHandler');

const rootRouter = require('./routes/root');
const billsRouter = require('./routes/bills');
const incomesRouter = require('./routes/incomes');

const app = express();
const db = new AbstractJsonHandler('../db.json');

app.use(bodyParser.json());

const PORT = 3080;
// const {v4 : uuidv4} = require('uuid');

app.use(rootRouter);
app.use(incomesRouter);
app.use(billsRouter);

//read homepage
// app.get('/api/month/:id' , (req, res) => {
//   console.log('/api/month called');
//   let allItems = billsRecurring.concat(incomesRecurring);
//   let archive = [];
//   let index;

//   for (let i = 0; i < allItems.length; i++) {
//     if (allItems[i].month == req.params.id) {
//       index = i;
//       archive.push(allItems[i]);
//     }
//   }

//   if (index) {
//     res.status(200).send(archive);
//   } else {
//     res.status(400).send( { ok: false });
//   }
// });

function runMigrations() {
  const data = db.getData();
  if (!data.billsRecurring) {
    db.patchData({ billsRecurring: [] });
  }

  if (!data.incomesRecurring) {
    db.patchData({ incomesRecurring: [] });
  }
}

async function init() {
  await db.init();
  runMigrations();
  app.listen(PORT);
}

init();