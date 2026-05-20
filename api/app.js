require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "dev") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });
}

//Route
app.get("/test", (req, res) => {
  res.status(200).json({ msg: "test Route" });
});

//connection DB
connectDB();

//Port
const port = process.env.PORT || 3000;

//run server
app.listen(port, () => {
  console.log(`server Running In port ${port}`);
});
