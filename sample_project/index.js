const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get("/", (req, res)=>{res.send(`${process.env.APP_NAME} is working!`)})

app.listen(8000, () => {
    console.log(`${process.env.APP_NAME || "___"} started at 8000`);
});
