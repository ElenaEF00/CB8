// Esercizio 1 + Avanzato
const popup = () => {
  const area = document.createElement("div");
  const popupWrapper = document.createElement("div");
  const popupText = document.createElement("h6");
  const subText = document.createElement("p");
  const btnAnsw = document.createElement("div");
  const btnYes = document.createElement("button");
  const btnNo = document.createElement("button");

  area.className = "backArea";
  popupWrapper.className = "popup";
  popupText.textContent = "Hai più di 18 anni?";
  subText.textContent =
    "Per visualizzare questo contenuto devi essere maggiorenne!";
  btnAnsw.className = "btnAnsw";
  btnYes.textContent = "Si";
  btnYes.classList.add("btn");
  btnYes.classList.add("confirm");
  btnNo.textContent = "No";
  btnNo.classList.add("btn");
  btnNo.classList.add("deny");

  btnAnsw.append(btnYes, btnNo);
  popupWrapper.append(popupText, subText, btnAnsw);
  area.appendChild(popupWrapper);

  return area;
};

setTimeout(() => {
  const popUpEl = popup();
  document.body.prepend(popUpEl);

  const btnYes = document.querySelector(".confirm");
  btnYes.addEventListener("click", () => {
    popUpEl.remove();
  });
  const btnNo = document.querySelector(".deny");
  btnNo.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });
}, 3500);

//Esercizio 2

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const cheapProducts = data.products.filter((product) => product.price < 50);
    console.log(cheapProducts);
  });
