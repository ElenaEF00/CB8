const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

let recipes = [
  {
    id: 1,
    nome: "Spaghetti alla Carbonara",
    ingredienti: [
      "Spaghetti",
      "Guanciale",
      "Uova",
      "Pecorino Romano",
      "Pepe nero",
    ],
    tempo_preparazione: 20,
    descrizione:
      "Una ricetta classica della cucina italiana, gli spaghetti alla carbonara sono semplici ma deliziosi. La salsa cremosa è ottenuta emulsionando uova crude con pecorino romano e pepe nero.",
  },
  {
    id: 2,
    nome: "Insalata di Quinoa",
    ingredienti: [
      "Quinoa",
      "Pomodorini ciliegia",
      "Cetrioli",
      "Avocado",
      "Mandorle",
      "Menta fresca",
      "Olio d'oliva",
      "Limone",
      "Sale",
      "Pepe",
    ],
    tempo_preparazione: 25,
    descrizione:
      "Un'insalata leggera e nutriente che unisce la quinoa ricca di proteine con verdure fresche e un condimento semplice ma gustoso. Perfetta per un pranzo leggero o come accompagnamento a un pasto principale.",
  },
  {
    id: 3,
    nome: "Tortilla di patate",
    ingredienti: ["Patate", "Uova", "Cipolle", "Olio d'oliva", "Sale", "Pepe"],
    tempo_preparazione: 40,
    descrizione:
      "Una tortilla spagnola classica, perfetta per la colazione, il pranzo o la cena. È composta da strati di patate fritte, cipolle e uova sbattute, cotta fino a doratura.",
  },
  {
    id: 4,
    nome: "Guacamole",
    ingredienti: [
      "Avocado",
      "Pomodori",
      "Cipolla",
      "Lime",
      "Coriandolo",
      "Sale",
      "Pepe",
    ],
    tempo_preparazione: 15,
    descrizione:
      "Una salsa messicana cremosa e ricca di sapori, realizzata con avocado schiacciato, pomodori a cubetti, cipolla, lime e coriandolo fresco. Ottimo con nachos o come condimento per taco.",
  },
  {
    id: 5,
    nome: "Salmone al forno con patate",
    ingredienti: [
      "Filetto di salmone",
      "Patate",
      "Limone",
      "Olio d'oliva",
      "Prezzemolo",
      "Sale",
      "Pepe",
    ],
    tempo_preparazione: 35,
    descrizione:
      "Un piatto principale semplice ma delizioso, che combina il gusto ricco e saporito del salmone con il comfort delle patate al forno. Perfetto per una cena in famiglia.",
  },
  {
    id: 6,
    nome: "Couscous alle verdure",
    ingredienti: [
      "Couscous",
      "Zucchine",
      "Peperoni",
      "Cipolle",
      "Pomodorini",
      "Olio d'oliva",
      "Prezzemolo",
      "Sale",
      "Pepe",
    ],
    tempo_preparazione: 25,
    descrizione:
      "Un piatto leggero e colorato che unisce il couscous con una varietà di verdure saltate in padella. Rapido da preparare e ricco di sapori mediterranei.",
  },
];

app.use(express.json());
app.use(cors());

app.get("/recipes", (req, res, next) => {
  res.json(recipes);
});

app.post("/recipes", (req, res, next) => {
  const body = req.body;

  if (
    body.id &&
    body.nome &&
    body.ingredienti &&
    body.tempo_preparazione &&
    body.descrizione
  ) {
    recipes.push(body);
    res.status(201).send("Ricetta aggiunta correttamente");
  } else {
    res.status(400).send("Manca qualcosa!");
  }
});

app.delete("/recipes/:id", (req, res, next) => {
  const id = Number(req.params.id);

  recipes = recipes.filter((recipe) => recipe.id !== id);
  res.send("Ricetta rimossa correttamente");
});

app.put("/recipes/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = recipes.findIndex((recipe) => recipe.id === id);

  if (index === -1) {
    res.status(400).send("Ricetta non trovata");
  } else {
    recipes[index] = body;
    res.send("Ricetta modificata correttamente");
  }
});

app.listen(PORT);
