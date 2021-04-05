const express = require("express");
const app = express();
const myCors = require('./middlewares/myCors')
require('dotenv').config();

const PORT = process.env.PORT || 5000;
// route
const api = require("./routes/apiRouter.js");

app.use(myCors);
app.use(express.json());

// wellcome word
app.get('/', (req, res) =>  {
  res.json("Welcome to my passwords generator");
})

// get all passwords
app.use("/api", api);

// wrong url or request method
app.use(function (req, res) {
  res.status(404).send({ msg: "page not found" });
});

module.exports = app.listen(PORT, () =>
  console.log(`server running on port : http://localhost:${PORT}`)
);
