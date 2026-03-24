require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "qa_bugtracker"
});

db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed!");
        console.error("Error Message: " + err.message);
        if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error("👉 Tip: Check your DB_USER and DB_PASSWORD in .env. If you don't have a password for root, leave DB_PASSWORD blank.");
        } else if (err.code === 'ER_BAD_DB_ERROR') {
            console.error(`👉 Tip: The database '${process.env.DB_NAME || 'qa_bugtracker'}' does not exist. Run the SQL script from /database/ to create it.`);
        } else {
            console.error(err.stack);
        }
        return;
    }
    console.log("✅ MySQL Connected!");
});

module.exports = db;