// Import mysql
const mysql = require("mysql");

// Import dotenv config
require("dotenv").config();

// destructing object
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

// Membuat koneksi db
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

// Mengecek koneksi ke db
db.connect((err) => {
  if (err) {
    console.log("Fail");
  } else {
    console.log("Success");
  }
});

// Export modul db
module.exports = db;
