const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 7896;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./routes/routes"));

app.listen(PORT, () => {});

module.exports = app;
