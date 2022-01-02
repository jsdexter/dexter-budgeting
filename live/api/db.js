const AbstractJsonHandler = require('./AbstractJsonHandler');

const db = new AbstractJsonHandler('../db.json');

module.exports = db;