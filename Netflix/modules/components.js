const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "lists-container";
  titleEl.textContent = title;

  container.append(titleEl);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
  imageEl.alt = imageData.name;

  return imageEl;
};

const navBarSearchElGen = () => {
  const searchWrapper = document.createElement("div");
  const netflixLogo = document.createElement("img");
  const inputEl = document.createElement("input");

  searchWrapper.className = "search";
  netflixLogo.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  netflixLogo.alt = "netflix-clone-logo";
  inputEl.type = "text";
  inputEl.placeholder = "search";

  searchWrapper.append(netflixLogo, inputEl);

  return searchWrapper;
};

const navBarLinksList = () => {
  const linksWrapper = document.createElement("div");
  const linksList = document.createElement("ul");
  const tvShowLinkEl = document.createElement("li");
  const moviesLinkEl = document.createElement("li");
  const labelEl = document.createElement("label");
  const selectEl = document.createElement("select");
  const optionEl = document.createElement("option");

  linksWrapper.className = "links";
  linksList.className = "links-list";
  tvShowLinkEl.textContent = "Tv Shows";
  moviesLinkEl.textContent = "Movies";
  labelEl.setAttribute = ("for", "categories");
  labelEl.textContent = "Categories";
  selectEl.name = "categories";
  selectEl.id = "categories";
  optionEl.value = "";

  selectEl.appendChild(optionEl);
  linksList.append(tvShowLinkEl, moviesLinkEl, labelEl, selectEl);
  linksWrapper.append(linksList);

  return linksWrapper;
};

const modalElGen = () => {
  const modalContainer = document.createElement("div");
  const modalTopDiv = document.createElement("div");
  const modalLogo = document.createElement("img");
  const closeBtn = document.createElement("button");
  const modalTitle = document.createElement("h2");
  const modalImg = document.createElement("img");
  const modalDescription = document.createElement("div");
  const modalTitleName = document.createElement("h3");
  const modalTitleDescription = document.createElement("p");
  const playBtn = document.createElement("button");

  modalLogo.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  modalLogo.className = "netflixLogo";
  closeBtn.textContent = "X";
  modalTopDiv.className = "modal-top";
  modalTitle.textContent = "In onda oggi";
  playBtn.textContent = "Guarda ora";

  modalTopDiv.append(modalLogo, closeBtn);
  modalDescription.append(modalTitleName, modalTitleDescription, playBtn);
  modalContainer.append(modalTopDiv, modalTitle, modalImg, modalDescription);

  return modalContainer;
};

export {
  modalElGen,
  navBarSearchElGen,
  navBarLinksList,
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
};
