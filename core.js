var db = require('mysql');
require('dotenv').config();

//test the .env file
console.log(process.env.DB_HOSTNAME);

var connection = db.createConnection({
  host:process.env.DB_HOSTNAME,
  user:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_NAME
})

// CONNECT
connection.connect();

var query1 = "show tables;"
var query2 = "SELECT 1 + 1 AS solution";
var query3 = 'SELECT first_name FROM `trader` WHERE `email`="mandy1339@gmail.com"';

// query1
connection.query(query1, function(error, results, fields) {
  if(error) {
    console.log(error);
  }
  else {
    console.log('QUERY 1 11 1 111 1 1  1  11 1 1');
    console.log('\nresults\n', results);
    console.log('\nfields\n', fields);
    console.log('\n\nchanged ' + results.changedRows + ' rows\n\n');
  }
});

// query2
connection.query(query2, function(error, results, fields) {
  if(error) {
    console.log(error);
  }
  else {
    console.log('QUERY 2 22 22 22 22 2 2 22 ');
    console.log('results:\n', results);
    console.log('results[0]:\n', results[0].solution);
    console.log('\nfields\n', fields);
    console.log('\n\nchanged ' + results.changedRows + ' rows\n\n');
  }
});

// query3
connection.query(query3, function(error, results, fields) {
  if(error) {
    console.log(error);
  }
  else {
    console.log('QUERY 3 3 3 3  3 3 33 3 3 33 3 3  3 3');
    console.log('results:\n', results);
    console.log('result[0]:\n', results[0]);
    console.log('\nALL THE FIELDS IN THE ARRAY:\n', fields);
    console.log('\n\nfields[0]:\n', fields[0], '\n\n\n');
    fields.forEach(function (item, index, array) {
      console.log(item.name);
    });
    results.forEach(function (item, index, array) {
      console.log(item.name);
    })
  }
});


// I have an email and a password.
var entered_email = 'mandy1339@gmail.com';
var entered_password = 'asd';

// find user by that email in database
var query4 = 'SELECT * FROM trader WHERE email="mandy1339@gmail.com"';
connection.query(query4, function(error, rows, fields) {
  if(error) {
    console.log(error);
  }
  else {
    console.log('QUERY 4 4 4 4 4 4 44 4 4 4 4 4 4 4 4 4 4 4');
    console.log('rows:"\n', rows);
    console.log('rows[0].password =', rows[0].password);
  }
})

// compare the password entered to user password
// if they match, take the entire user row and give it to serialize (just store it somewhere for now)






// END CONNECTION
connection.end();
