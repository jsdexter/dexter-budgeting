// const db = require('../db');
const { dbAddItem } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { promisePool } = require('../db');
const { format } = require('date-fns');

const createTransaction = async (req, res) => {
    try {
        const id = uuidv4();
        // console.log("byebye");
        // const formDate = format(new Date(req.body.dueDate), 'yyyy-MM-dd');
        // req.body.dueDate = new Date(req.body.dueDate);



        const transaction = await promisePool(`INSERT INTO transactions.transactionsRecurring 
            (name, dueDate, address, city, state, zip, accountNumber, 
            amountDue, month, type, id) VALUES ("${req.body.name}", "${req.body.dueDate}", "${req.body.address}", 
            "${req.body.city}", "${req.body.state}", ${req.body.zip}, ${req.body.accountNumber}, ${req.body.amountDue}, 
            "${req.body.month}", "${req.body.type}", "${id}");`, req.body);

        // console.log("this is the formdate:" + formDate);
        //TODO: Validation
        //TODO: error handling

        if (transaction) {
            // res.status(200).send(req.body);
            res.status(200).send({ transaction });
            // console.log("CREATE ITEM FORMDATE" + formDate);
        } else {
            res.status(400).send({ ok: false });
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({ ok: false });
    }
};

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

module.exports = {
    createTransaction
}
