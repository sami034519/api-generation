import mysql from "mysql2";
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root_123",
  database: "studentdata",
});
connection.connect((err) => {
  if (err) {
    console.log(err, "error");
  } else {
    console.log("connected");
  }
});

export default connection;
