import { httpGET } from "./http.js";

//SYNC COMPONENTS

const navbarElGen = () => {
  const headerEl = document.createElement("header");
  const container = document.createElement("nav");
  const wrapperLogo = document.createElement("div");
  const logoImg = document.createElement("img");
  const wrapperLinks = document.createElement("div");
  const linksList = document.createElement("ul");
  const homeLiEl = document.createElement("li");
  const storeLiEl = document.createElement("li");
  const genresLiEl = document.createElement("li");
  const mostPopularLiEl = document.createElement("li");
  const airingTodayLiEl = document.createElement("li");
  const dwnlLiEl = document.createElement("li");
  const searchEl = document.createElement("li");
  const wrapperUser = document.createElement("div");
  const userImg = document.createElement("img");

  headerEl.className = "header";
  container.className = "main-nav";
  wrapperLogo.className = "logo";
  logoImg.src =
    "https://zeevector.com/wp-content/uploads/LOGO/prime-video-logo-white-2048x629.png";
  logoImg.alt = "logo";
  wrapperLinks.className = "links";
  linksList.className = "links-list";
  homeLiEl.textContent = "Home";
  storeLiEl.textContent = "Store";
  genresLiEl.textContent = "Generi";
  mostPopularLiEl.textContent = "Più popolari";
  airingTodayLiEl.textContent = "In onda oggi";
  dwnlLiEl.textContent = "Download";
  searchEl.textContent = "Cerca";
  wrapperUser.className = "user";
  userImg.src = "https://img.icons8.com/fluency/48/user-male-circle--v1.png";
  userImg.alt = "profilo utente";

  wrapperLogo.append(logoImg);
  linksList.append(
    homeLiEl,
    storeLiEl,
    genresLiEl,
    mostPopularLiEl,
    airingTodayLiEl,
    dwnlLiEl,
    searchEl
  );
  wrapperUser.appendChild(userImg);
  wrapperLinks.appendChild(linksList);
  container.append(wrapperLogo, wrapperLinks, wrapperUser);
  headerEl.appendChild(container);

  return headerEl;
};

const mobileFooterGen = () => {
  const wrapper = document.createElement("div");
  const footerLinks = document.createElement("ul");
  const footerHome = document.createElement("li");
  const homeImg = document.createElement("img");
  const homeTx = document.createElement("p");
  const footerStore = document.createElement("li");
  const storeImg = document.createElement("img");
  const storeTx = document.createElement("p");
  const footerDwnl = document.createElement("li");
  const dwnlImg = document.createElement("img");
  const dwnlTx = document.createElement("p");
  const footerSearch = document.createElement("li");
  const searchImg = document.createElement("img");
  const searchTx = document.createElement("p");

  wrapper.className = "mobile-footer";
  footerLinks.className = "mobile-links";
  homeImg.src =
    "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/home--v1.png";
  homeImg.alt = "Home";
  homeTx.textContent = "Home";
  storeImg.src =
    "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/shopping-bag--v1.png";
  storeImg.alt = "Store";
  storeTx.textContent = "Store";
  dwnlImg.src =
    "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/downloading-updates.png";
  dwnlImg.alt = "Download";
  dwnlTx.textContent = "Download";
  searchImg.src =
    "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/search--v1.png";
  searchImg.alt = "Search";
  searchTx.textContent = "Cerca";

  footerHome.append(homeImg, homeTx);
  footerStore.append(storeImg, storeTx);
  footerDwnl.append(dwnlImg, dwnlTx);
  footerSearch.append(searchImg, searchTx);
  footerLinks.append(footerHome, footerStore, footerDwnl, footerSearch);
  wrapper.appendChild(footerLinks);

  return wrapper;
};

const desktopFooterGen = () => {
  const wrapper = document.createElement("div");
  const logoWrapper = document.createElement("div");
  const logo = document.createElement("img");
  const linksWrapper = document.createElement("div");
  const footerLinks = document.createElement("ul");
  const frstLink = document.createElement("li");
  const scndLink = document.createElement("li");
  const thrdLink = document.createElement("li");
  const frthLink = document.createElement("p");

  wrapper.className = "desktop-footer";
  logoWrapper.className = "footer-logo";
  logo.src =
    "https://zeevector.com/wp-content/uploads/LOGO/prime-video-logo-white-2048x629.png";
  logo.alt = "logo";
  linksWrapper.className = "desktop-list";
  footerLinks.className = "desktop-links";
  frstLink.textContent = "Termini di utilizzo";
  scndLink.textContent = "Informativa sulla privacy";
  thrdLink.textContent = "Aiuto";
  frthLink.textContent = "© 1996-2023, Amazon.com, Inc. o società affiliate";

  logoWrapper.appendChild(logo);
  footerLinks.append(frstLink, scndLink, thrdLink, frthLink);
  linksWrapper.appendChild(footerLinks);
  wrapper.append(logoWrapper, linksWrapper);

  return wrapper;
};

// ASYNC COMPONENTS

const heroSliderElGen = () => {
  const wrapper = document.createElement("div");
  const overlayEl = document.createElement("div");
  const heroImgEl = document.createElement("img");
  const heroTitle = document.createElement("div");
  const titleEl = document.createElement("h1");
  const heroInfo = document.createElement("div");
  const btnWatchNow = document.createElement("button");
  const btnAdd = document.createElement("button");
  const bulletContainer = document.createElement("div");

  wrapper.className = "hero";
  overlayEl.className = "overlay";
  heroImgEl.className = "hero-img";
  heroTitle.className = "hero-title";
  heroInfo.className = "hero-info";
  btnWatchNow.className = "button";
  btnWatchNow.textContent = "Guarda ora";
  btnAdd.className = "button";
  btnAdd.textContent = "+";
  bulletContainer.className = "bullet-container";

  for (let i = 0; i < 5; i++) {
    const pointEl = document.createElement("div");
    pointEl.className = "bullet";
    if (i === 0) pointEl.classList.add("active");
    pointEl.id = i;

    bulletContainer.appendChild(pointEl);
  }

  heroTitle.appendChild(titleEl);
  heroInfo.append(titleEl, btnWatchNow, btnAdd);
  wrapper.append(overlayEl, heroImgEl, heroTitle, heroInfo, bulletContainer);

  return wrapper;
};

const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "cards-container";
  titleEl.textContent = title;

  container.appendChild(titleEl);

  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const cardEl = document.createElement("div");
  const imageEl = document.createElement("img");
  const cardTx = document.createElement("h5");

  cardEl.className = "card-item";
  imageEl.id = imageData.id;
  imageEl.src = `https://image.tmdb.org/t/p/w154${imageData.poster_path}`;
  imageEl.alt = imageData.name;
  cardTx.textContent = imageData.name;

  cardEl.append(imageEl, cardTx);

  return cardEl;
};

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);

  const listsContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((series) => cardsListEl.appendChild(cardElGen(series)));

  listsContainerEl.appendChild(cardsListEl);

  return listsContainerEl;
};

export {
  navbarElGen,
  heroSliderElGen,
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
  asyncListContainerElGen,
  mobileFooterGen,
  desktopFooterGen,
};
