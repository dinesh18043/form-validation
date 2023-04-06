// const express = require("express");
// const sql = require("mysql");
// const cors = require("cors");
// const app = express();
// app.use(cors);
// app.use(express.json);

// const db = sql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

// app.post("/", (req, res) => {
//   const sql = "insert into users (`name`,`age`,`address`) values (?)";
//   const values = [req.body.name, req.body.age, req.body.address];
//   db.query(sql, [values], (err, data) => {
//     if (err) {
//       return res.json(err);
//     }
//     return res.json(data);
//   });
// });
// app.listen(4000, () => {
//   console.log("listening...");
// });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

app.use(cors());
app.use(bodyParser());

app.listen(4000, () => {});

app.post("/test", (req, res) => {
  console.log(req.body);
  // res.send();
  db.execute(
    "INSERT INTO `test`.`users`(`firstname`,`lastname`,`email`)VALUES(?,?,?);",
    [req.body.firstname, req.body.lastname, req.body.email],
    function (err, results) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(results);
    }
  );
  db.execute(
    `Select * from  test.users where firstname = '${req.body.firstname}' ORDER BY firstname DESC LIMIT 1 ;`,

    function (err, results) {
      if (err) {
        console.log(err);
        return;
      }
      res.send(results);
      console.log(results);
    }
  );
});
