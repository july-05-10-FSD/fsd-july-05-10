const express = require("express");

const app = express();




app.use("/", (req, res) => {
    res.send("Server is alive")
});



const port = 8000;

app.listen(port, () => {
    console.log("Server is running on:", port);
});