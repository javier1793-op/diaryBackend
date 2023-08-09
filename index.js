
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;



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
