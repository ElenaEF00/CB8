const elementGenerator = (element) => {
  return document.createElement(element);
};

const addClass = (classType, tag) => {
  return tag.classList.add(classType);
};

const createHeader = () => {
  const header = elementGenerator("header");
  const headerWrapper = elementGenerator("div");
  const headerLogoDiv = elementGenerator("div");
  const headerLogo = elementGenerator("img");
  const headerMenu = elementGenerator("div");
  const headerNav = elementGenerator("nav");
  const headerUl = elementGenerator("ul");
  const liHome = elementGenerator("li");
  const homeA = elementGenerator("a");
  const liAbout = elementGenerator("li");
  const aboutA = elementGenerator("a");
  const liShop = elementGenerator("li");
  const shopA = elementGenerator("a");
  const liPages = elementGenerator("li");
  const pagesA = elementGenerator("a");
  const liContacts = elementGenerator("li");
  const contactsA = elementGenerator("a");
  const headerEnd = elementGenerator("div");
  const signUpA = elementGenerator("a");
  const headerBtn = elementGenerator("button");

  addClass("main-header", header);
  addClass("header-wrapper", headerWrapper);
  addClass("logo", headerLogoDiv);
  addClass("header-menu", headerMenu);
  addClass("main-nav", headerNav);
  addClass("header-end", headerEnd);
  addClass("header-button", headerBtn);

  headerLogo.src = "./media/LogoRisorsa 1.png";
  headerLogo.alt = "Gifty logo";
  homeA.textContent = "Home";
  aboutA.textContent = "About";
  shopA.textContent = "Shop";
  pagesA.textContent = "Pages";
  contactsA.textContent = "Contacts";
  signUpA.textContent = "Sign up";
  headerBtn.textContent = "Order Now";

  liHome.appendChild(homeA);
  liAbout.appendChild(aboutA);
  liShop.appendChild(shopA);
  liPages.appendChild(pagesA);
  liContacts.appendChild(contactsA);
  headerUl.append(liHome, liAbout, liShop, liPages, liContacts);
  headerNav.appendChild(headerUl);
  headerMenu.appendChild(headerNav);
  headerLogoDiv.appendChild(headerLogo);
  headerEnd.append(signUpA, headerBtn);
  headerWrapper.append(headerLogoDiv, headerMenu, headerEnd);
  header.appendChild(headerWrapper);

  return header;
};

const createHero = () => {
  const hero = elementGenerator("section");
  const textDiv = elementGenerator("div");
  const heroTitle = elementGenerator("h1");
  const heroP = elementGenerator("p");
  const heroBtn = elementGenerator("button");
  const imgDiv = elementGenerator("div");
  const heroImg = elementGenerator("img");

  addClass("hero-wrapper", hero);
  addClass("hero-text", textDiv);
  addClass("button", heroBtn);
  addClass("hero-img", imgDiv);

  heroTitle.textContent = "Thoughtful Gifting Made Easy";
  heroP.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam alias amet perferendis quod laborum.";
  heroBtn.textContent = "GET STARTED";
  heroImg.src = "./media/undraw_gift_box_re_vau4.svg";
  heroImg.alt = "gifting";

  imgDiv.appendChild(heroImg);
  textDiv.append(heroTitle, heroP, heroBtn);
  hero.append(textDiv, imgDiv);

  return hero;
};

const createFirstSection = () => {
  const firstSection = elementGenerator("section");
  const firstText = elementGenerator("div");
  const firstTitle = elementGenerator("h3");
  const firstP = elementGenerator("p");
  const servicesContainer = elementGenerator("div");
  const servicesWrapper = elementGenerator("div");
  const firstService = elementGenerator("div");
  const firstServiceImg = elementGenerator("img");
  const firstServiceTitle = elementGenerator("h6");
  const firstServiceP = elementGenerator("p");
  const secondService = elementGenerator("div");
  const secondServiceImg = elementGenerator("img");
  const secondServiceTitle = elementGenerator("h6");
  const secondServiceP = elementGenerator("p");
  const thirdService = elementGenerator("div");
  const thirdServiceImg = elementGenerator("img");
  const thirdServiceTitle = elementGenerator("h6");
  const thirdServiceP = elementGenerator("p");

  addClass("first-section", firstSection);
  addClass("first-text", firstText);
  addClass("services-container", servicesContainer);
  addClass("services-wrapper", servicesWrapper);
  addClass("service", firstService);
  addClass("service", secondService);
  addClass("service", thirdService);

  firstTitle.textContent = "Thoughtful Gifting Made Easy";
  firstP.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio natus impedit sit sed, deleniti et excepturi harum velit, \n quis nulla amet ipsa iusto voluptatum obcaecati dolorum. Quidem accusamus unde delectus.";
  firstServiceImg.src = "./media/undraw_gift_card_re_5dyy.svg";
  firstServiceImg.alt = "gift card";
  firstServiceTitle.textContent = "Gift Card";
  firstServiceP.textContent =
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, corrupti.";
  secondServiceImg.src = "./media/undraw_xmas_snowman_k-7-yf.svg";
  secondServiceImg.alt = "snowman";
  secondServiceTitle.textContent = "Xmas Snowman";
  secondServiceP.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, itaque?";
  thirdServiceImg.src = "./media/undraw_xmas_surprise_-57-p1.svg";
  thirdServiceImg.alt = "surprise";
  thirdServiceTitle.textContent = "Xmas Surprise";
  thirdServiceP.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, accusamus!";

  firstService.append(firstServiceImg, firstServiceTitle, firstServiceP);
  secondService.append(secondServiceImg, secondServiceTitle, secondServiceP);
  thirdService.append(thirdServiceImg, thirdServiceTitle, thirdServiceP);
  servicesWrapper.append(firstService, secondService, thirdService);
  servicesContainer.appendChild(servicesWrapper);
  firstText.append(firstTitle, firstP);
  firstSection.append(firstText, servicesContainer);

  return firstSection;
};

const createSection = (title, imgsrc, imgalt) => {
  const sectionContainer = elementGenerator("section");
  const sectionWrapper = elementGenerator("div");
  const sectionImgDiv = elementGenerator("div");
  const sectionImg = elementGenerator("img");
  const sectionText = elementGenerator("div");
  const sectionTitle = elementGenerator("h3");
  const sectionP = elementGenerator("p");
  const sectionPP = elementGenerator("p");
  const sectionBtn = elementGenerator("button");

  addClass("section-wrapper", sectionWrapper);
  addClass("section-img", sectionImgDiv);
  addClass("section-text", sectionText);
  addClass("button", sectionBtn);

  sectionP.textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quae dolores inventore totam doloremque repellendus?";
  sectionPP.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam, nostrum blanditiis quisquam dolorem atque.";
  sectionBtn.textContent = "READ MORE";
  sectionTitle.textContent = title;
  sectionImg.src = imgsrc;
  sectionImg.alt = imgalt;

  sectionImgDiv.appendChild(sectionImg);
  sectionText.append(sectionTitle, sectionP, sectionPP, sectionBtn);
  sectionWrapper.append(sectionImgDiv, sectionText);
  sectionContainer.appendChild(sectionWrapper);

  return sectionContainer;
};

const createBlog = () => {
  const blogWrapper = elementGenerator("div");
  const blogTitle = elementGenerator("h3");
  const blogP = elementGenerator("p");

  addClass("first-text", blogWrapper);

  blogTitle.textContent = "Our Blog";
  blogP.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio natus impedit sit sed, deleniti et excepturi harum velit.";

  blogWrapper.append(blogTitle, blogP);

  return blogWrapper;
};

const cardGenerator = (imagesrc, imagealt, texth5, textp) => {
  const cardDiv = elementGenerator("div");
  const cardImgDiv = elementGenerator("div");
  const cardImg = elementGenerator("img");
  const cardTextDiv = elementGenerator("div");
  const cardTitle = elementGenerator("h5");
  const cardP = elementGenerator("p");
  const cardA = elementGenerator("a");

  addClass("card", cardDiv);
  addClass("card-img", cardImgDiv);
  addClass("card-text", cardTextDiv);

  cardImg.src = imagesrc;
  cardImg.alt = imagealt;
  cardTitle.textContent = texth5;
  cardP.textContent = textp;
  cardA.textContent = "Read more →";

  cardImgDiv.appendChild(cardImg);
  cardTextDiv.append(cardTitle, cardP, cardA);
  cardDiv.append(cardImgDiv, cardTextDiv);

  return cardDiv;
};

const card1 = cardGenerator(
  "./media/13119.jpg",
  "gifting party",
  "Everyone should join their Gifting party for better experiences",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, vitae perspiciatis dolorum explicabo saepe odio mollitia aliquid omnis veniam velit!"
);
const card2 = cardGenerator(
  "./media/4793.jpg",
  "gifting party 2",
  "We made a record on last year's Gifting party",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, vitae perspiciatis dolorum explicabo saepe odio mollitia aliquid omnis veniam velit!"
);
const card3 = cardGenerator(
  "./media/66083.jpg",
  "gifting party 3",
  "Everyone should join their Gifting party for better experiences",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, vitae perspiciatis dolorum explicabo saepe odio mollitia aliquid omnis veniam velit!"
);

const cardsContainerGenerator = () => {
  const cardsContainer = elementGenerator("div");
  const cardsWrapper = elementGenerator("div");
  addClass("cards-container", cardsContainer);
  addClass("cards-wrapper", cardsWrapper);

  cardsContainer.append(cardsWrapper);
  cardsWrapper.append(card1, card2, card3);

  return cardsContainer;
};

const createFormTextArea = () => {
  const textSection = elementGenerator("div");
  const textDiv = elementGenerator("text");
  const textTitle = elementGenerator("h3");
  const textP = elementGenerator("p");
  const textPp = elementGenerator("p");

  addClass("section-text", textSection);
  addClass("text", textDiv);

  textTitle.textContent = "Contact Us";
  textP.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab dolores repellendus assumenda rem aspernatur?";
  textPp.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaera aperiam blanditiis eaque recusandae ex incidunt maiores vero aliquam magnam aut.";

  textDiv.append(textTitle, textP, textPp);
  textSection.appendChild(textDiv);

  return textSection;
};

const createInput = (inputType) => {
  const inputs = elementGenerator("div");
  const inputP = elementGenerator("p");

  addClass("insert-info", inputs);

  inputP.textContent = inputType;

  inputs.appendChild(inputP);

  return inputs;
};

const input1 = createInput("First Name");
const input2 = createInput("Last Name");
const input3 = createInput("Email");
const input4 = createInput("Phone Number");

const createInputSection = (firstinput, secondinput) => {
  const info = elementGenerator("div");

  addClass("info", info);

  info.append(firstinput, secondinput);

  return info;
};

const createInput5 = () => {
  const messageContainer = elementGenerator("div");
  const messageWrapper = elementGenerator("div");
  const message = elementGenerator("p");

  addClass("info", messageContainer);
  addClass("info-message", messageWrapper);
  message.textContent = "Write your message";

  messageWrapper.appendChild(message);
  messageContainer.appendChild(messageWrapper);

  return messageContainer;
};

const firstInfoBox = createInputSection(input1, input2);
const secondInfoBox = createInputSection(input3, input4);
const thirdInfoBox = createInput5();

const createFormContainer = () => {
  const formWrapper = elementGenerator("div");
  const formBtn = elementGenerator("button");

  addClass("form-wrapper", formWrapper);
  addClass("button", formBtn);

  formBtn.textContent = "Submit";

  formWrapper.append(firstInfoBox, secondInfoBox, thirdInfoBox, formBtn);

  return formWrapper;
};

const createForm = () => {
  const formEl = elementGenerator("section");

  addClass("form-section", formEl);

  formEl.append(createFormTextArea(), createFormContainer());

  return formEl;
};

const iconsList = [
  {
    src: "./media/FBTavola disegno 1.png",
    alt: "Facebook",
  },
  {
    src: "./media/IGRisorsa 1.png",
    alt: "Instagram",
  },
  {
    src: "./media/LinkTavola disegno 1.png",
    alt: "Linkedin",
  },
];

const createFooter = (iconsList) => {
  const footerWrapper = elementGenerator("footer");
  const footerText = elementGenerator("div");
  const textTitle = elementGenerator("h5");
  const textP = elementGenerator("p");
  const footerIcons = elementGenerator("div");

  addClass("footer", footerWrapper);
  addClass("footer-text", footerText);
  addClass("footer-icons", footerIcons);

  textTitle.textContent = "About Gifty";
  textP.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum cum, voluptatum corporis velit officia? Cum eos, aut ipsum laboriosam perspiciatis sapiente dignissimos facere repellendus!";

  iconsList.forEach((icon) => {
    const footerIcon = elementGenerator("img");
    footerIcon.src = icon.src;
    footerIcon.alt = icon.alt;
    footerIcons.appendChild(footerIcon);
  });

  footerText.append(textTitle, textP);
  footerWrapper.append(footerText, footerIcons);

  return footerWrapper;
};

const headerEl = createHeader();
const heroEl = createHero();
const firstSection = createFirstSection();
const section1 = createSection(
  "Corporate Gifting",
  "./media/undraw_gift_re_qr17.svg",
  "corporate gifting"
);
const section2 = createSection(
  "Personal Gifting",
  "./media/undraw_gifts_0ceh.svg",
  "personal gifting"
);
const blog = createBlog();
const cardsEl = cardsContainerGenerator();
const formEl = createForm();
const footerEl = createFooter(iconsList);

document.body.append(
  headerEl,
  heroEl,
  firstSection,
  section1,
  section2,
  blog,
  cardsEl,
  formEl,
  footerEl
);

// So che per molte cose avrei potuto creare delle funzioni apposite e sarebbe stato più corretto e più leggero, ma il tempo è stato mio nemico :)
