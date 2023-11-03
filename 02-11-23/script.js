// Esercizio 1
function getTemperatureStatus(currentTemperature) {
  if (currentTemperature >= 40) {
    return "caldo";
  } else if (currentTemperature >= 25 && currentTemperature < 40) {
    return "mite";
  } else if (currentTemperature < 25) {
    return "freddo";
  } else {
    return "valore non valido";
  }
}

let currentTemperature = prompt("Quanti gradi ci sono oggi?");
let climate = getTemperatureStatus(currentTemperature);

if (climate !== "temperatura non valida") {
  console.log("Il clima oggi è " + getTemperatureStatus(currentTemperature));
} else {
  console.log("Valore non valido");
}

//Esercizio 2

const me = {
  name: "Elena",
  surname: "Faraci",
  age: 22,
  contacts: ["elena.faraci60@gmail.com", 3284221148],
  "eyes-color": "verdi",
  "hair-color": "marroni",
  introduction: function () {
    return (
      "Ciao, mi chiamo " +
      this.name +
      " " +
      this.surname +
      ", ho " +
      this.age +
      " anni, gli occhi " +
      this["eyes-color"] +
      " e i capelli " +
      this["hair-color"]
    );
  },
};

console.log(me.introduction());

// Esercizio Avanzato
const favourites = [];
function addToFavourites(favBook) {
  favourites.push(favBook);
}
function showFavourites() {
  for (let i = 0; i < favourites.length; i++) {
    console.log(" - ", favourites[i]);
  }
}
function deleteFavourite(favBook) {
  const deleteIndex = favourites.indexOf(favBook);
  if (deleteIndex !== -1) {
    favourites.splice(deleteIndex, 1);
    console.log("Elemento eliminato");
  } else {
    console.log("L'elemento non è stato trovato");
  }
}

addToFavourites("Tess of the d'Uberville");
addToFavourites("Paradise Lost");
addToFavourites("Pride and Prejudice");
addToFavourites("The portrait of Dorian Gray");

const newBook = prompt("Aggiungi il tuo titolo preferito");
addToFavourites(newBook);
console.log('Nuovo elemento aggiunto ai preferiti: "', newBook, '"');

showFavourites();

deleteFavourite("Paradise Lost");
showFavourites();

deleteFavourite("Shadowhunters");

const delBook = prompt("Qual è il titolo che vuoi eliminare?");
deleteFavourite(delBook);
console.log('Hai rimosso dai preferiti: "', delBook, '"');

showFavourites();
