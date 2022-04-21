const express = require("express");
const userRoutes = require('./routes/user.routes')
const cors = require('cors');
const bodyParser = require('body-parser')

const User = require('./database-mongo');

const app = express();

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/../client/public"));

app.use("/api/Users", userRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
