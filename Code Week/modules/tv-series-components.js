import { httpGET } from "./http.js";

const moreInfoElGen = (info) => {
  const addedInfo = document.createElement("div");
  const moreInfoEl = document.createElement("div");
  const firstEl = document.createElement("div");
  const firstTitle = document.createElement("h6");
  const numberOfSeasons = document.createElement("p");
  const secondEl = document.createElement("div");
  const secondTitle = document.createElement("h6");
  const numberOfEpisodes = document.createElement("p");
  const thirdEl = document.createElement("div");
  const thirdTitle = document.createElement("h6");
  const lang = document.createElement("p");
  const forthEl = document.createElement("div");
  const forthTitle = document.createElement("h6");
  const status = document.createElement("p");
  const fifthEl = document.createElement("div");
  const fifthTitle = document.createElement("h6");
  const genres = document.createElement("p");
  const sixthEl = document.createElement("div");
  const sixthTitle = document.createElement("h6");
  const overview = document.createElement("p");
  const trailerWrapper = document.createElement("div");
  const trailerEl = document.createElement("iframe");

  addedInfo.className = "added-info";
  moreInfoEl.className = " more-info";
  firstEl.className = "info";
  secondEl.className = "info";
  thirdEl.className = "info";
  forthEl.className = "info";
  fifthEl.className = "info";
  sixthEl.className = "long-info";
  trailerWrapper.className = "trailer-wrapper";
  trailerEl.className = "trailer";

  firstTitle.textContent = "Stagioni";
  numberOfSeasons.textContent = info.number_of_seasons;
  secondTitle.textContent = "Episodi";
  numberOfEpisodes.textContent = info.number_of_episodes;
  thirdTitle.textContent = "Lingua";
  lang.textContent = info.spoken_languages;
  forthTitle.textContent = "Status";
  status.textContent = info.status;
  fifthTitle.textContent = "Generi";
  genres.textContent = info.genres;
  sixthTitle.textContent = "Storyline";
  overview.textContent = info.overview;
  trailerEl.src = info.trailer;

  firstEl.append(firstTitle, numberOfSeasons);
  secondEl.append(secondTitle, numberOfEpisodes);
  thirdEl.append(thirdTitle, lang);
  forthEl.append(forthTitle, status);
  fifthEl.append(fifthTitle, genres);
  sixthEl.append(sixthTitle, overview);
  moreInfoEl.append(firstEl, secondEl, thirdEl, forthEl, fifthEl, sixthEl);
  trailerWrapper.appendChild(trailerEl);
  addedInfo.append(moreInfoEl, trailerWrapper);

  return addedInfo;
};

const mainSectionElGen = (info) => {
  const container = document.createElement("section");
  const backgroundEl = document.createElement("div");
  const overlayEl = document.createElement("div");
  const backgroundImg = document.createElement("img");
  const backBtn = document.createElement("button");
  const mainInfoEl = document.createElement("div");
  const infoTitle = document.createElement("h1");
  const infoDiv = document.createElement("div");
  const infoVote = document.createElement("h3");
  const infoYear = document.createElement("h3");
  const btnContainer = document.createElement("div");
  const whatchBtn = document.createElement("button");
  const addListBtn = document.createElement("button");

  container.className = "container";
  overlayEl.className = "overlayEl";
  backgroundEl.className = "background";
  mainInfoEl.className = "main-info";
  btnContainer.className = "btn-container";
  whatchBtn.className = "watch-btn";
  addListBtn.className = "add-list-btn";
  infoDiv.className = "info-container";

  backgroundImg.src = `https://image.tmdb.org/t/p/w1280${info.backdrop_path}`;
  backgroundImg.alt = info.name;
  backBtn.className = "back-btn";
  backBtn.textContent = "⇤";
  infoTitle.textContent = info.name;
  infoVote.textContent = "⭐" + Math.floor(info.vote_average);
  infoYear.textContent = info.first_air_date.split("-")[0];
  whatchBtn.textContent = " ▶ Inizia a guardare";
  addListBtn.textContent = " + Aggiungi alla lista";

  backBtn.addEventListener(
    "click",
    () => (window.location.href = "index.html")
  );

  const moreInfo = moreInfoElGen(info);

  backgroundEl.append(overlayEl, backgroundImg);
  infoDiv.append(infoVote, infoYear);
  mainInfoEl.append(infoTitle, infoDiv);
  btnContainer.append(whatchBtn, addListBtn);
  container.append(backgroundEl, backBtn, mainInfoEl, btnContainer, moreInfo);

  return container;
};

const recommendedSectionElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "recommended-section";
  titleEl.textContent = title;

  container.appendChild(titleEl);

  return container;
};

const recommendedListElGen = (info) => {
  const container = document.createElement("div");

  container.className = "recommended-list";

  return container;
};

const recommendedElGen = (info) => {
  const recommendedCard = document.createElement("div");
  const imageEl = document.createElement("img");

  recommendedCard.className = "recommended-card";
  imageEl.src = `https://image.tmdb.org/t/p/w300${info.backdrop_path}`;
  imageEl.alt = info.name;

  recommendedCard.appendChild(imageEl);

  return recommendedCard;
};

const asyncRecommendedSectionElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);

  const recommendedContainerEl = recommendedSectionElGen(title);
  const recommendedList = recommendedListElGen(data);

  data.results.map((series) =>
    recommendedList.append(recommendedElGen(series))
  );

  recommendedContainerEl.appendChild(recommendedList);

  return recommendedContainerEl;
};

export {
  moreInfoElGen,
  mainSectionElGen,
  recommendedSectionElGen,
  recommendedListElGen,
  recommendedElGen,
  asyncRecommendedSectionElGen,
};
