const express = require("express");
// const mongoose = require("mongoose");

const PORT = 80;
const app = express();
// const DB_USER = "root";
// const DB_PASSWORD = "example";
//  const DB_HOST = 'mongo';
// const DB_PORT = 27017;
// const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
// mongoose
//   .connect(URI)
//   .then(() => console.log("connect to db..."))
//   .catch((err) => console.log("there is an error ",err));

app.get("/", (req, res) => res.send("<h1> hello Mahmoud!</h1>"));
app.listen(PORT, () => console.log(`app is up and ruining on port :${PORT}`));
