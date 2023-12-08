import {
  navbarElGen,
  mobileFooterGen,
  desktopFooterGen,
} from "./modules/components.js";
import {
  moreInfoElGen,
  mainSectionElGen,
  recommendedSectionElGen,
  recommendedListElGen,
  recommendedElGen,
  asyncRecommendedSectionElGen,
} from "./modules/tv-series-components.js";
import { httpGET } from "./modules/http.js";

const params = new URLSearchParams(window.location.search);

let idSerie;

if (params.has("idSerie")) {
  idSerie = params.get("idSerie");
} else {
  window.location.href = `index.html`;
}

const mainSection = document.createElement("main");

httpGET(`/tv/${idSerie}`).then((data) => {
  const serie = {};
  serie.number_of_seasons = data.number_of_seasons;
  serie.number_of_episodes = data.number_of_episodes;
  serie.spoken_languages = data.spoken_languages
    .map((languages) => languages.english_name)
    .join(", ");
  serie.status = data.status;
  serie.genres = data.genres.map((genres) => genres.name).join(", ");
  serie.overview = data.overview;
  serie.backdrop_path = `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`;
  serie.name = data.name;
  serie.vote_average = data.vote_average;
  serie.first_air_date = data.first_air_date;

  httpGET(`/tv/${idSerie}/videos`).then((data) => {
    serie.trailer = `https://www.youtube.com/embed/${data.results[0].key}?autoplay=1&mute=1`;

    mainSection.append(mainSectionElGen(serie));
  });
});

const recommendedSection = document.createElement("section");

asyncRecommendedSectionElGen(
  `/tv/${idSerie}/recommendations`,
  "Consigliati"
).then((element) => recommendedSection.append(element));

document.body.append(
  navbarElGen(),
  mainSection,
  recommendedSection,
  mobileFooterGen(),
  desktopFooterGen()
);
