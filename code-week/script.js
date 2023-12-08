import {
  navbarElGen,
  asyncListContainerElGen,
  heroSliderElGen,
  mobileFooterGen,
  desktopFooterGen,
} from "./modules/components.js";
import { httpGET } from "./modules/http.js";

const mainSectionEl = document.querySelector(".main");

document.body.append(
  navbarElGen(),
  heroSliderElGen(),
  mainSectionEl,
  mobileFooterGen(),
  desktopFooterGen()
);

const heroImg = document.querySelector(".hero-img");
const heroTitleEl = document.querySelector(".hero-title");

document.querySelectorAll(".bullet").forEach((bullet) => {
  bullet.addEventListener("click", (event) => {
    currentIndex = (parseInt(event.target.id) + 1) % 5;
    const serie = data.results[event.target.id];
    heroImg.src = `https://image.tmdb.org/t/p/original/${serie.backdrop_path}`;
    heroTitleEl.textContent = serie.name;

    document.querySelectorAll(".bullet").forEach((bullet) => {
      bullet.classList.remove("active");
    });

    event.target.classList.add("active");
  });
});

const data = await httpGET("/tv/popular");
let currentIndex = 1;

heroImg.src = `https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path}`;
heroTitleEl.textContent = data.results[0].name;

setInterval(() => {
  const serie = data.results[currentIndex];

  heroImg.src = `https://image.tmdb.org/t/p/original/${serie.backdrop_path}`;
  heroTitleEl.textContent = serie.name;

  document.querySelectorAll(".bullet").forEach((bullet) => {
    if (bullet.id == currentIndex) bullet.classList.add("active");
    else bullet.classList.remove("active");
  });

  currentIndex = (currentIndex + 1) % 5;
}, 3500);

Promise.all([
  asyncListContainerElGen("/tv/popular", "Più popolari"),
  asyncListContainerElGen("/tv/top_rated", "Più votati"),
  asyncListContainerElGen("/tv/airing_today", "In onda oggi"),
  asyncListContainerElGen("/tv/on_the_air", "In onda questa settimana"),
]).then((elements) =>
  elements.map((el) => {
    mainSectionEl.append(el);
    el.addEventListener("click", (event) => {
      if (event.target.nodeName === "IMG") {
        window.location.href = `tv-series.html?idSerie=${event.target.id}`;
      }
    });
  })
);
