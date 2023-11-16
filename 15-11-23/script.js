//Avanzato
const elementGenerator = (element) => {
  return document.createElement(element);
};

const addClass = (classType, tag) => {
  return tag.classList.add(classType);
};
// header
const header = elementGenerator("section");
const mainTitle = elementGenerator("h2");
const divHeader = elementGenerator("div");
const divIcons = elementGenerator("div");
const divSearch = elementGenerator("div");
const search = elementGenerator("img");
const divCart = elementGenerator("div");
const cart = elementGenerator("img");

addClass("main-header", header);
addClass("header-text", mainTitle);
addClass("divImgs", divIcons);
addClass("divSearch", divSearch);
addClass("searchImg", search);
addClass("divCart", divCart);
addClass("cartImg", cart);

mainTitle.textContent = "Choose your next favourite";
search.src = "./media/search.png";
search.alt = "cerca";
cart.src = "./media/shopping-bag.png";
cart.alt = "carrello";

divSearch.appendChild(search);
divCart.appendChild(cart);
divIcons.append(divSearch, divCart);
divHeader.appendChild(mainTitle);
header.append(divHeader, divIcons);
document.body.appendChild(header);
// end header

// nav section
const menu = elementGenerator("div");
const mainNavWrapper = elementGenerator("nav");
const all = elementGenerator("div");
const allImg = elementGenerator("img");
const allText = elementGenerator("h6");
const watches = elementGenerator("div");
const watchesImg = elementGenerator("img");
const watchesText = elementGenerator("h6");
const jewellery = elementGenerator("div");
const jewelleryImg = elementGenerator("img");
const jewelleryText = elementGenerator("h6");
const bags = elementGenerator("div");
const bagsImg = elementGenerator("img");
const bagsText = elementGenerator("h6");
const sunglasses = elementGenerator("div");
const sunglassesImg = elementGenerator("img");
const sunglassesText = elementGenerator("h6");

addClass("menu", menu);
addClass("navWrapper", mainNavWrapper);
addClass("active", all);
addClass("divProducts", all);
addClass("divProducts", watches);
addClass("divProducts", jewellery);
addClass("divProducts", bags);
addClass("divProducts", sunglasses);
addClass("productImgs", allImg);
addClass("productImgs", watchesImg);
addClass("productImgs", jewelleryImg);
addClass("productImgs", bagsImg);
addClass("productImgs", sunglassesImg);

allImg.src = "./media/search2-light-01.png";
allImg.alt = "tutti";
allText.textContent = "Tutti";
watchesImg.src = "./media/wrist-watch.png";
watchesImg.alt = "orologi";
watchesText.textContent = "Orologi";
jewelleryImg.src = "./media/necklace.png";
jewelleryImg.alt = "gioielli";
jewelleryText.textContent = "Gioielli";
bagsImg.src = "./media/handbag.png";
bagsImg.alt = "borse";
bagsText.textContent = "Borse";
sunglassesImg.src = "./media/sunglasses.png";
sunglassesImg.alt = "occhiali da sole";
sunglassesText.textContent = "Occhiali";

all.append(allImg, allText);
watches.append(watchesImg, watchesText);
jewellery.append(jewelleryImg, jewelleryText);
bags.append(bagsImg, bagsText);
sunglasses.append(sunglassesImg, sunglassesText);
mainNavWrapper.append(all, watches, jewellery, bags, sunglasses);
menu.appendChild(mainNavWrapper);
document.body.appendChild(menu);

// end nav section

// Esercizio 1
const recommendedSection = elementGenerator("section");
const h3 = elementGenerator("h3");
h3.textContent = "Consigliati per te";
document.body.appendChild(h3);

const roboProdGen = (data) => {
  const divWrapper = elementGenerator("div");
  const divCard = elementGenerator("div");
  const divImg = elementGenerator("div");
  const divInfo = elementGenerator("div");
  const img = elementGenerator("img");
  const divText = elementGenerator("div");
  const pPrice = elementGenerator("h4");
  const roboName = elementGenerator("p");
  const favourite = elementGenerator("div");
  const heart = elementGenerator("img");
  const addToCart = elementGenerator("div");
  const cart = elementGenerator("img");

  addClass("recommended", recommendedSection);
  addClass("robo-wrapper", divWrapper);
  addClass("info", divInfo);
  addClass("robo-card", divCard);
  addClass("robo-text", divText);
  addClass("div-img", divImg);
  addClass("robo-img", img);
  addClass("btnFav", favourite);
  addClass("heart", heart);
  addClass("btnAddToCart", addToCart);
  addClass("cart", cart);

  pPrice.textContent = data.pPrice;
  roboName.textContent = data.roboName;
  img.src = data.imageUrl;
  img.alt = data.roboName;
  heart.src = "./media/heart.png";
  heart.alt = "preferiti";
  cart.src = "./media/plus.png";
  cart.alt = "carrello";

  divText.append(pPrice, roboName);
  favourite.appendChild(heart);
  addToCart.appendChild(cart);
  divInfo.append(divText, addToCart);
  divCard.append(img, divInfo, favourite);
  divWrapper.appendChild(divCard);
  recommendedSection.appendChild(divWrapper);

  return recommendedSection;
};

const roboList = [
  {
    id: 1,
    roboName: "Classic Lumine Ring G",
    pPrice: "€41",
    imageUrl: "./media/58f8809bc465a94fca3dd11b946251ac0762b9c0.png",
  },
  {
    id: 2,
    roboName: "Lynx Bio-acetate Black",
    pPrice: "€107",
    imageUrl: "./media/aa734c67704fe1f58c12be4a0f84dbd0c03788fa.png",
  },
  {
    id: 3,
    roboName: "Petite Evergold",
    pPrice: "da €116",
    imageUrl: "./media/c8bd0bbe58c25c0caf52806dd0362df62569d70d.png",
  },
  {
    id: 4,
    roboName: "Mini Sadie Bag Brown",
    pPrice: "€219",
    imageUrl: "./media/lcpkf3wtkdxyzngxkmru.png",
  },
  {
    id: 5,
    roboName: "Iconic Cronograph St Mawes Amber RG",
    pPrice: "€224",
    imageUrl: "./media/ruqe9vxbwdi9v5nmolsj.png",
  },
  {
    id: 6,
    roboName: "Classic Bracelet G",
    pPrice: "€44",
    imageUrl: "./media/hkh6gyodcboxhka61zfk.png",
  },
];

//Esercizio 2
try {
  roboList.map((element) => document.body.appendChild(roboProdGen(element)));
} catch (error) {
  if (error.message.split(" ")[0] === "roboList") {
    console.error("Manca l'array di oggetti");
  } else if (error.message.split(" ")[0] === "roboProdGen") {
    console.error("Manca la funzione");
  }
} finally {
  console.log("Va tutto bene");
}
// fine Esercizio 2

// fixed navigation footer
const footer = elementGenerator("section");
const navBar = elementGenerator("div");
const home = elementGenerator("img");
const yourFavourites = elementGenerator("img");
const yourCart = elementGenerator("img");
const profile = elementGenerator("img");

addClass("footer", footer);
addClass("navBar", navBar);
addClass("icons", home);
addClass("icons", yourFavourites);
addClass("icons", yourCart);
addClass("icons", profile);

home.src = "./media/home (1).png";
home.alt = "Home";
yourFavourites.src = "./media/heart(1).png";
yourFavourites.alt = "i tuoi preferiti";
yourCart.src = "./media/shopping-bag(1).png";
yourCart.alt = "il tuo carrello";
profile.src = "./media/user.png";
profile.alt = "profilo";

navBar.append(home, yourFavourites, yourCart, profile);
footer.appendChild(navBar);
document.body.appendChild(footer);

// end fixed navigation footer
