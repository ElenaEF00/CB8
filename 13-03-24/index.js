const express = require("express");
const books = require("./books");
const bodyParsers = require("body-parser");
const app = express();

const PORT = 3000;

app.use(bodyParsers.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/books", (req, res) => {
  const response = {
    status: "OK",
    books: books,
    elements: books.length,
  };

  res.status(200).json(response);
});

app.post("/books", (req, res) => {
  const book = {
    ID: parseInt(Math.random() * Date.now()),
    titolo: req.body.titolo,
    autore: req.body.autore,
    anno: req.body.anno,
    genere: req.body.genere,
  };

  books.push(book);

  res.redirect("/books");
});

app.get("/newBook", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/newBook.html");
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
