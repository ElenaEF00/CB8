// Esercizio 1
const elementGenerator = (tag) => {
  return document.createElement(tag);
};

const addClass = (classType, tag) => {
  return tag.classList.add(classType);
};

const section = elementGenerator("section");
const divText = elementGenerator("div");
const divWrapper = elementGenerator("div");
const h1 = elementGenerator("h1");
const p = elementGenerator("p");
const button = elementGenerator("button");

addClass("hero", section);
addClass("hero-wrapper", divWrapper);
addClass("hero-text", divText);
addClass("display", h1);
addClass("button", button);

h1.textContent = "La montagna è la tua prossima meta";
p.textContent =
  "Scappa dalla frenesia quotidiana e immergiti nella serenità della natura alpina. Trascorri un fine settimana rigenerante in una accogliente baita di montagna, respira aria fresca, riscaldati accanto al camino e goditi la tranquillità di una fuga indimenticabile.";
button.textContent = "Scopri la nostra realtà";

divText.append(h1, p, button);
divWrapper.appendChild(divText);
section.appendChild(divWrapper);
document.body.appendChild(section);

//Esercizio 2
button.addEventListener("click", () => {
  addClass("disabled", section);
  const sectionReturnToHero = elementGenerator("section");
  addClass("returnSection", sectionReturnToHero);
  const returnButton = elementGenerator("button");
  returnButton.textContent = "Ritorna alla Hero";
  addClass("returnButton", returnButton);
  document.body.prepend(sectionReturnToHero);
  sectionReturnToHero.appendChild(returnButton);
  returnButton.addEventListener("click", () => {
    section.classList.remove("disabled");
    returnButton.style.display = "none";
  });
});

//Avanzato
const title = elementGenerator("h2");
title.textContent = "Sfoglia la nostra gallery";
document.body.appendChild(title);

const galleryWrapper = elementGenerator("div");
addClass("galleryWrapper", galleryWrapper);
document.body.appendChild(galleryWrapper);

const imgGenerator = (img) => {
  //funzione pura
  const imgEl = elementGenerator("img");
  imgEl.setAttribute("id", img.id);
  imgEl.setAttribute("src", img.imgUrl);
  imgEl.setAttribute("alt", img.altText);
  imgEl.setAttribute("class", img.class);
  return imgEl;
};

const img1 = {
  id: 1,
  imgUrl: "https://picsum.photos/350/250?random=1",
  altText: "Immagine alternativa 1",
  class: "select",
};
const img2 = {
  id: 2,
  imgUrl: "https://picsum.photos/350/250?random=2",
  altText: "Immagine alternativa 2",
  class: "select",
};
const img3 = {
  id: 3,
  imgUrl: "https://picsum.photos/350/250?random=3",
  altText: "Immagine alternativa 3",
  class: "select",
};
const img4 = {
  id: 4,
  imgUrl: "https://picsum.photos/350/250?random=4",
  altText: "Immagine alternativa 4",
  class: "select",
};

const arrowBtn = elementGenerator("button");
arrowBtn.textContent = ">";
addClass("arrowBtn", arrowBtn);

galleryWrapper.append(
  imgGenerator(img1),
  imgGenerator(img2),
  imgGenerator(img3),
  imgGenerator(img4),
  arrowBtn
);

//Avanzato per gli audaci :/
const imageList = [
  //ho modificato un po' l'array aggiungendo qualche altro elemento e correggendo id e altText in base alle immagini che avevo inserito in precedenza
  {
    id: 5,
    imgUrl: "https://picsum.photos/350/250?random=5",
    altText: "Immagine 5",
    class: "select",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/350/250?random=6",
    altText: "Immagine 6",
    class: "select",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/350/250?random=7",
    altText: "Immagine 7",
    class: "select",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/350/250?random=8",
    altText: "Immagine 8",
    class: "select",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/350/250?random=9",
    altText: "Immagine 9",
    class: "select",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/350/250?random=10",
    altText: "Immagine 10",
    class: "select",
  },
  {
    id: 11,
    imgUrl: "https://picsum.photos/350/250?random=11",
    altText: "Immagine 11",
    class: "select",
  },
  {
    id: 12,
    imgUrl: "https://picsum.photos/350/250?random=12",
    altText: "Immagine 12",
    class: "select",
  },
  {
    id: 13,
    imgUrl: "https://picsum.photos/350/250?random=13",
    altText: "Immagine 13",
    class: "select",
  },
  {
    id: 14,
    imgUrl: "https://picsum.photos/350/250?random=14",
    altText: "Immagine 14",
    class: "select",
  },
  {
    id: 15,
    imgUrl: "https://picsum.photos/350/250?random=15",
    altText: "Immagine 15",
    class: "select",
  },
  {
    id: 16,
    imgUrl: "https://picsum.photos/350/250?random=16",
    altText: "Immagine 16",
    class: "select",
  },
];

arrowBtn.addEventListener("click", () => {
  imageList.forEach((img) => {
    galleryWrapper.append(imgGenerator(img));
  });
  arrowBtn.style.display = "none";
});
