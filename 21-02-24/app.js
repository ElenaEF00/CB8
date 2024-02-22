const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const { users } = require("./users");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

//Mostro tutti i dati degli utenti sulla rotta /api/v1
app.get("/api/v1", (req, res) => {
  res.json(users);
});

//Mostro solo alcuni campi scelti come id, nome e cognome dell'utente
app.get("/api/v1/users", (req, res) => {
  const newUsers = users.map((user) => {
    const { id, firstName, lastName } = user;
    return { id, firstName, lastName };
  });
  res.json(newUsers);
});

//Effettuo la ricerca per id ed imposto un controllo per cui se l'id inserito non è presente verrà restituito "Utente non trovato"
app.get("/api/v1/users/:userId", (req, res) => {
  const { userId } = req.params;
  console.log(req.params);
  const singleUsers = users.find((user) => user.id === Number(userId));

  if (!singleUsers) {
    return res.status(404).send("Utente non trovato");
  }

  return res.json(singleUsers);
});

//Filtro per nome degli utenti, che si possono ricercare sia in maiuscolo che in minuscolo e decido quanti risultati mostrare.
app.get("/api/v1/user", (req, res) => {
  const { search, limit } = req.query;
  console.log(req.query);
  let filterUser = [...users];

  if (search) {
    const searchTermLower = search.toLowerCase();
    const searchTermUpper = search.toUpperCase();
    filterUser = filterUser.filter((user) => {
      const userLowerCase = user.firstName.toLowerCase();
      return (
        userLowerCase.startsWith(searchTermLower) ||
        userLowerCase.startsWith(searchTermUpper)
      );
    });
  }

  if (limit) {
    filterUser = filterUser.slice(0, limit);
  }

  if (filterUser.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(filterUser);
});

app.listen(PORT, () => {
  console.log("server attivo");
});
