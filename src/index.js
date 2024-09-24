const express = require("express");
const cors = require("cors");
const connection = require("./config/connection");
const router = require("./routes/register.route");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors('*'));
connection();

app.use(router);

app.use("/", (req, res) => {
    res.send("Server is alive")
});

const port = 8000;

app.listen(port, () => {
    console.log("Server is running on:", port);
});