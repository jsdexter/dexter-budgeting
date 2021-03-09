const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const PORT = 3070;

const rootRouter = require('./routes/root');
const createsRouter = require('./routes/create');
const readsRouter = require('./routes/read');
const updatesRouter = require('./routes/update');
const deletesRouter = require('./routes/delete');

const app = express();

app.use(bodyParser.json());


app.use(rootRouter);
app.use('/api', createsRouter);
app.use('/api', readsRouter);
app.use('/api', updatesRouter);
app.use('/api',deletesRouter);

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