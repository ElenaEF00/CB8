// Esercizio 1
// const onImgGET = async () => {
//   const res = await fetch("https://picsum.photos/v2/list");
//   const data = await res.json();
//   const images = data.map((image) => console.log(image.download_url));
//   return images;
// };

// onImgGET();

// Esercizio 2
const pic = {
  id: "0",
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/5000/3333",
};

const imageAndText = (image) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("h3");

  wrapperEl.className = "wrapper";
  imgEl.className = "image";
  imgEl.src = image.download_url;
  imgEl.alt = "taken by: " + image.author;
  textEl.textContent = image.author;

  wrapperEl.append(imgEl, textEl);

  return wrapperEl;
};

const page = document.querySelector(".page");
page.appendChild(imageAndText(pic));

//Avanzato
const onImgGET = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();

  return data;
};

const images = async () => {
  const data = await onImgGET();
  data.map((pic) => {
    const card = imageAndText(pic);
    page.appendChild(card);
  });
};
images();
