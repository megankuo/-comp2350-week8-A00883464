const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

// mysql://b5cd6e94de059e:cb794693@us-cdbr-east-03.cleardb.com/heroku_6883605ec53e29b?reconnect=true
const dbConfigHeroku = {
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'b5cd6e94de059e',
  password: 'cb794693',
  database: 'heroku_6883605ec53e29b',
  multipleStatements: false,
  namedPlaceholders: true,
};

const dbConfigLocal = {
  host: 'localhost',
  user: 'root',
  password: 'Password',
  database: 'lab_example',
  multipleStatements: false,
};

if (is_heroku) {
  var database = mysql.createPool(dbConfigHeroku);
} else {
  var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
