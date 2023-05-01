const mysql = require("mysql");

let sqlTableData = [
  "CREATE TABLE alerts (CameraName VARCHAR(255) NOT NULL,AlertID INT NOT NULL,TimeDate DATETIME NOT NULL,AlertType VARCHAR(255) NOT NULL,AlertLevel VARCHAR(255) NOT NULL,Location VARCHAR(255) NOT NULL,X FLOAT NOT NULL,Y FLOAT NOT NULL,Status VARCHAR(255) NOT NULL,AlertDescription VARCHAR(15),ActionTaken VARCHAR(15), AdditionalDetails TEXT, PRIMARY KEY (CameraName, AlertID))",
  "CREATE TABLE users (_id VARCHAR(50) PRIMARY KEY,username VARCHAR(50) NOT NULL, isAdmin BOOLEAN DEFAULT false,dob DATE,gender VARCHAR(11),address VARCHAR(100),city VARCHAR(30),state VARCHAR(30),country VARCHAR(15),about VARCHAR(200),email VARCHAR(30) UNIQUE,phoneNo VARCHAR(15) UNIQUE, password VARCHAR(100))"
];

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  port: 3306,
  database: "cloud281",
});

connection.getConnection((err) => {
  if (err) {
    console.log("######### error occurred");
    // eslint-disable-next-line no-throw-literal
    throw "Error occoured" + err;
  }
  console.log("Connection Created");

  function createTable(tables) {
    if (tables.length == 0) return;
    var tableQuery = tables.pop();
    connection.query(tableQuery, function (err, result) {
      if (err) {
        console.log("######### create table error #########");
        throw err;
      }
      console.log("Table created");
      createTable(tables);
    });
  }
  createTable(sqlTableData.reverse());
});
