//Esercizio 1
const sum = (firstNum, secondNum, thridNum) => firstNum + secondNum + thridNum;
const sub = (firstNum, secondNum, thridNum) => firstNum - secondNum - thridNum;
const mult = (firstNum, secondNum, thridNum) => firstNum * secondNum * thridNum;
const quo = (firstNum, secondNum, thridNum) => {
  if (secondNum === 0 || thridNum === 0) {
    return "Non si può dividere per zero!";
  }
  return firstNum / secondNum / thridNum;
}; // definisco tutte le operazioni e impongo che non venga effettuata la divisione se almeno uno dei valori inseriti è 0
const calculator = (operation, firstNum, secondNum, thridNum) => {
  const operationResult = operation(firstNum, secondNum, thridNum);
  return operationResult;
}; // definisco che la funzione calcolatrice prenda in ingresso una delle operazioni definite e tre valori e me ne restituisca il valore

// Esempi di applicazione
console.log(calculator(sum, 1, 2, 3));
console.log(calculator(quo, 25, 5, 0));
console.log(calculator(mult, 3, 5, 7));

//Esercizio 2
let chart = [
  {
    id: 1,
    productName: "Leone d'Almerita",
    typeOfProduct: "Vino bianco",
    region: "Sicilia",
    description:
      "Amore per la propria terra e per i frutti che produce, questo il connubio sentimentale che lega i Tasca d`Almerita al mondo del vino e tanta Sicilia si respira nel bicchiere dei vini da loro prodotti.",
    img: "https://d5l1pnk7dv8vr.cloudfront.net/ARTICOLI/L_594.png",
    price: "€15",
  },
  {
    id: 2,
    productName: "Sedara",
    typeOfProduct: "Vino rosso",
    region: "Sicilia",
    description:
      "Il nome di questo vino, fragrante ed estremamente gustoso, riporta alla mente Don Calogero Sedàra, il personaggio ricco e borghese tra i protagonisti del romanzo Il Gattopardo di Giuseppe Tomasi di Lampedusa.",
    img: "https://d5l1pnk7dv8vr.cloudfront.net/ARTICOLI/L_978.png",
    price: "€10",
  },
  {
    id: 3,
    productName: "Corvo rosso",
    typeOfProduct: "Vino rosso",
    region: "Sicilia",
    description:
      "Color rubino intenso, dalle profonde note di marasca e rabarbaro, liquirizia e grafite, rivela all`assaggio grande struttura e tannini decisi, buon equilibrio e chiusura ammandorlata.",
    img: "https://d5l1pnk7dv8vr.cloudfront.net/ARTICOLI/L_314.png",
    price: "€5,60",
  },
];
// dopo aver inserito in un array gli elementi di un carrello di un e-commerce, lo processo con forEach e map
chart.forEach((product) =>
  console.log(
    `Il prodotto si chiama: ${product.productName}, è un ${product.typeOfProduct} e costa ${product.price}`
  )
);

const productType = chart.map(
  (product) => `Il prodotto ${product.id} è un ${product.typeOfProduct}`
);
console.log(productType);

// Noto che l'array processato con forEach() ne scorre gli elementi e, con il console.log, restituisce una stampa dei valori da me selezionati, ma il suo valore di ritorno è sempre undefined.
//Invece map (), scorre gli elementi presenti nell'array ma restituisce un nuovo array composto dallo stesso numero di componenti dell'array in ingresso e contenente i valori originali trasformati o che soddisfano una condizione.

//Esercizio Avanzato
const array1 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const array2 = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

const transformAndFilter = (array1, array2) => {
  const transArray1 = array1.map((number) => number * 2);
  const transArray2 = array2.map((number) => number + 5);
  const transAndFiltArray1 = transArray1.filter((number) => number > 10);
  const transAndFiltArray2 = transArray2.filter((number) => number % 2 === 0);
  //dopo aver definito le trasformazioni da applicare agli array, le stampo singolarmente per assicurarmi che ogni modifica venga eseguita correttamente
  console.log(transArray1, transArray2);
  console.log(transAndFiltArray1, transAndFiltArray2);
};
// restituisce i due array dopo le due trasformazioni
transformAndFilter(array1, array2);
