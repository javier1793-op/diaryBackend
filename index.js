require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");

const apiRouter = require("./Routes/api");
const app = express();
const PORT =  8000;

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRouter)


app.get("/", (req, res) => {
  res.json(dia);
});
app.get("*", (req, res) => {
  res.sendStatus("404");
});

app.listen(PORT, () => {
  console.log(`Server is runnig on port: ${PORT}`);
});
