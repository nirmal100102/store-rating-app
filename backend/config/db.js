const mysql = require("mysql2");

console.log("DB_USER:", process.env.DB_USER);
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const connectDB = () => {
  db.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err);
    } else {
      console.log("✅ Database connected successfully");
    }
  });
};

module.exports = {
  db,
  connectDB,
};

