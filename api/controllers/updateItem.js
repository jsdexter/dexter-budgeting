const db = require('../db');

function find(collection, id) {
  for (let i = 0; i < collection.length; i++) {
    if(collection[i].id == id) {
      return collection[i];
    }
  }
}

const getCollection = (key) => {
  const dbData = db.getData();
  return dbData[key];
}

const updateBill = (req, res) => {
    // let index;
    // const { billsRecurring } = db.getData();
    // for (let i = 0; i < billsRecurring.length; i++) {
    //   if (billsRecurring[i].id == req.params.id) {
    //     index = i;
    //     break;
    //   }
    // }

    const billObject = getCollection('billsRecurring');
    const billItem = find(billObject, req.params.id);
  
    if (typeof billItem !== "undefined") {
      billObject[billItem] = { ...billObject[billItem], ...req.body };
      db.patchData(billObject);
      res.status(200).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
};

const updateIncome = (req, res) => {
    let index;
    const { incomesRecurring } = db.getData();
    for (let i = 0; i < incomesRecurring.length; i++) {
      if (incomesRecurring[i].id == req.params.id) {
        index = i;
        break;
      }
    }
  
    if (typeof index !== "undefined") {
      incomesRecurring[index] = { ...incomesRecurring[index], ...req.body };
      db.patchData({ incomesRecurring });
      res.status(200).send({ ok: true });
    } else {
      res.status(400).send({ ok: false });
    }
  };

module.exports = {
    updateBill,
    updateIncome
};

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