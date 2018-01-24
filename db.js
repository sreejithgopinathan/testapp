require('dotenv').config();
const pgp = require("pg-promise")(/*options*/);

var connection = pgp(process.env.DB_CONNECTION);

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
