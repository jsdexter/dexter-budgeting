const { check, validationResult } = require('express-validator');

let validation = [
    check('name')
        .notEmpty()
        .withMessage('The PayTo Name cannot be empty'),
    check('dueDate')
        .notEmpty()
        .isDate()
        .isAfter()
        .withMessage('Must be a valid date'),
    check('zip')
        .isPostalCode('US'),
    check('amountDue')
        .isNumeric(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];


// let validation = (req, res) => {


//     if (typeof req.body !== 'object') {
//         return res.status(400).send({ error: 'not an object' });
//     }
// };

module.exports = validation;