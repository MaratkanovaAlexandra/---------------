const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "b95120bu",
    database: "b95120bu_cur",
    password: "4wJ3wC&W"
});


connection.connect(function(err:Error) {
    if (err) throw err;
    console.log("Connected!");
  });