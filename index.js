const express = require("express");
const app = express();
const categories = require("./data/categories.json");
const news = require("./data/news.json");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("hello im home");
});
app.get("/categories", (req, res) => {
  res.status(200).send(categories);
});

app.get("/news", (req, res) => {
  res.status(200).send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.status(200).send(selectedNews);
});

app.get("/categories/:id", (req, res) => {
  const id = Number(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => Number(n.category_id) === id);
    res.status(200).send(categoryNews);
  }
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:5000`);
});
