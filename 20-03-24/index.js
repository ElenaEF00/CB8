require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Makeup = require("./models/makeup");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connessione con il DB OK!"));

//Lista di tutti i prodotti
app.get("/makeup", async (req, res) => {
  const makeupProducts = await Makeup.find();

  res.json(makeupProducts);
});

//Chiamata al singolo prodotto
app.get("/makeup/:id", async (req, res) => {
  try {
    const makeup = await Makeup.findById(req.params.id);

    res.status(201).json(makeup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Aggiungere il singolo prodotto
app.post("/makeup", async (req, res) => {
  const makeup = new Makeup({
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
  });

  try {
    const newMakeup = await makeup.save();

    res.status(201).json({ newMakeup });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Cancellare tutti o il singolo prodotto
app.delete("/makeup/:id", async (req, res) => {
  try {
    if (req.params.id === "all") {
      await Makeup.deleteMany();
      res
        .status(201)
        .json({ message: "Tutti i prodotti sono stati cancellati!" });
    } else {
      await Makeup.findByIdAndDelete(req.params.id);
      res.status(201).json({ message: "Il prodotto è stato cancellato!" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Modifica il prodotto
app.put("/makeup/:id", async (req, res) => {
  try {
    const makeup = await Makeup.findById(req.params.id);

    if (!makeup) {
      res.status(404).json({ message: "Product not found" });
    } else {
      const { name, brand, price, category } = req.body;

      if (name && brand && price && category) {
        makeup.name = name;
        makeup.brand = brand;
        makeup.price = price;
        makeup.category = category;

        await makeup.save();
        res.status(201).json({ message: "Il prodotto è stato modificato!" });
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3000);
