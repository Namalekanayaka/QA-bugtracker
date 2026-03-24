const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // your MySQL username
    password: "root123",// your MySQL password
    database: "qa_bugtracker"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected!");
});

module.exports = db;