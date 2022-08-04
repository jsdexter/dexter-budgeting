const { check, validationResult } = require('express-validator');

let validation = [
    check('dueDate')
        .notEmpty()
        // .isDate()
        // .isISO8601()
        .isAfter()
        .withMessage('Must be a valid date'),
    check('name')
        .isString()
        .notEmpty()
        .withMessage('The PayTo Name cannot be empty'),
    check('address')
        .isString(),
    check('city')
        .isString(),
    check('state')
        .isString(),
    check('zip')
        .isString(),
    // .isPostalCode('US'),
    check('accountNumber')
        .isString(),
    check('amountDue')
        .isNumeric(),
    check('month')
        .isString(),
    check('type')
        .isString(),
    check('isPaid')
        .isInt(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];

module.exports = validation;