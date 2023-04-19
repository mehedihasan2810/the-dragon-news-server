const express = require("express");
const app = express();
const categories = require("./data/categories.json");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("hello im home");
});
app.get("/categories", (req, res) => {
  res.status(200).json(categories);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:5000`);
});
