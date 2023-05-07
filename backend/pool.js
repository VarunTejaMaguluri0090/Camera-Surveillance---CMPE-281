//imported mysql
const mysql = require('mysql');

//created object for mysql + add settings
const connection = mysql.createConnection({
    host     :  'localhost',
    user     : 'root',
    password : 'password',
    port : 3306,
    database : 'cloud281'
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  else{
    console.log('Connected!');
}
 
});
module.exports = connection;


// https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
// https://apple.stackexchange.com/questions/176786/how-to-add-mysql-to-path-variable-to-resolve-mysql-command-not-found

// to start sql in terminal

// mysql -u root -p

// if mysql command not found: 
// export PATH=${PATH}:/usr/local/mysql/bin
// In the terminal - show databases, use Cloud281 -> show tables;