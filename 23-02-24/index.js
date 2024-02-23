const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const auth = require("./middleware");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;

app.get("/login", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/login.html");
});

app.post("/mostra-dati", (req, res) => {
  const { username, password } = req.body;

  res.status(200).send(
    `<h3>Ciao <strong>${username}</strong>, la tua password è <strong>${password}</strong> </h3>
    <a href="/dashboard?username=${username}">Visualizza la tua dashboard</a>`
  );
});

app.get("/dashboard", auth, (req, res) => {
  res
    .status(200)
    .send(`Benvenuto ${req.query.username} , questa è la tua dashboard`);
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
