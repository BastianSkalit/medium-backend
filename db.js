const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3307,
  password: "password",
  database: "taskdwbacth13"
});

connection.connect();

module.exports = connection;
