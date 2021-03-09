const AbstractJsonHandler = require('./AbstractJsonHandler');

const db = new AbstractJsonHandler('../db.json');

// function runMigrations() {
//   const data = db.getData();
//   if (!data.billsRecurring) {
//     db.patchData({ billsRecurring: [] });
//   }

//   if (!data.incomesRecurring) {
//     db.patchData({ incomesRecurring: [] });
//   }
// }

module.exports = db;