const express = require('express');
const bodyParser = require('body-parser');
const AbstractJsonHandler = require('./AbstractJsonHandler');

const rootRouter = require('./routes/root');
const createsRouter = require('./routes/create');
const readsRouter = require('./routes/read');
const updatesRouter = require('./routes/update');
const deletesRouter = require('./routes/delete');

const app = express();
const db = new AbstractJsonHandler('../db.json');

app.use(bodyParser.json());

const PORT = 3070;

app.use(rootRouter);
app.use(createsRouter);
app.use(readsRouter);
app.use(updatesRouter);
app.use(deletesRouter);

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