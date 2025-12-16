const cards = [
  {
    recipeName: "Vanliga Pannkakor",
    image: "/images/pancake-bottom-left.jpg",
    link: `/recept.html?recipe=${encodeURIComponent(
      "Vanliga Pannkakor"
    )}&image=${encodeURIComponent("/images/pancake-bottom-left.jpg")}`,
    desc: "En helt vanlig, klassisk pannkaka.",
  },

  {
    recipeName: "Amerikanska Pannkakor",
    image: "/images/american.jpg",
    link: `/recept.html?recipe=${encodeURIComponent(
      "Amerikanska Pannkakor"
    )}&image=${encodeURIComponent("/images/american.jpg")}`,
    desc: "En tjockare pannkaka, serveras vanligtvis med lönnsirap.",
  },

  {
    recipeName: "Belgiska Våfflor",
    image: "/images/belgian.jpg",
    link: `/recept.html?recipe=${encodeURIComponent(
      "Belgiska Våfflor"
    )}&image=${encodeURIComponent("/images/belgian.jpg")}`,
    desc: "En belgisk våffla gräddas i ett särskilt våffeljärn som ger en fyrkantig och lite högre form än en traditionell svensk våffla.",
  },

  {
    recipeName: "Plättar",
    image: "/images/plattar.jpg",
    link: `/recept.html?recipe=${encodeURIComponent(
      "Plättar"
    )}&image=${encodeURIComponent("/images/plattar.jpg")}`,
    desc: "Plättar tillagas av samma recept som pannkaka, men är betydligt mindre.",
  },

  {
    recipeName: "Saffranspannkaka",
    image: "/images/saffranspannkaka.jpg",
    link: `/recept.html?recipe=${encodeURIComponent(
      "Saffranspannkaka"
    )}&image=${encodeURIComponent("/images/saffranspannkaka.jpg")}`,
    desc: "Saffranspannkaka eller Gotlandspannkaka är en lyxig efterrättsvariant från Gotland.",
  },

  {
    recipeName: "Fläskpannkaka",
    image: "/images/flaskpannkaka.jpg",
    link: `/recept.html?recipe=${encodeURIComponent(
      "Fläskpannkaka"
    )}&image=${encodeURIComponent("/images/flaskpannkaka.jpg")}`,
    desc: "Fläskpannkaka är ugnspannkaka som innehåller fint skurna tärningar av rimmat sidfläsk. Fläskpannkaka serveras traditionellt med lingonsylt.",
  },

  {
    recipeName: "Ugnspannkaka",
    image: "/images/ugnspannkaka.jpg",
    link: `/recept.html?recipe=${encodeURIComponent(
      "Ugnspannkaka"
    )}&image=${encodeURIComponent("/images/ugnspannkaka.jpg")}`,
    desc: "Fläskpannkaka är ugnspannkaka som innehåller fint skurna tärningar av rimmat sidfläsk. Fläskpannkaka serveras traditionellt med lingonsylt.",
  },

  {
    recipeName: "Crêpes",
    image: "/images/crepes.jpg",
    link: `/recept.html?recipe=${encodeURIComponent(
      "Crêpes"
    )}&image=${encodeURIComponent("/images/crepes.jpg")}`,
    desc: "Crêpes är franska för tunna pannkakor och kan ätas som förrätt eller dessert.",
  },
];

const cardContainer = document.getElementById("card-container");

const createCard = (recipeCard) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const a = document.createElement("a");
  a.href = recipeCard.link;

  const img = document.createElement("img");
  img.classList.add("card-image");
  img.src = recipeCard.image;
  img.width = 200;
  img.height = 200;

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  const aTwo = document.createElement("a");
  aTwo.setAttribute("href", recipeCard.link);

  const h3 = document.createElement("h3");
  h3.textContent = recipeCard.recipeName;

  const p = document.createElement("p");
  p.textContent = recipeCard.desc;

  a.appendChild(img);
  card.appendChild(a);
  cardContent.appendChild(aTwo);
  aTwo.appendChild(h3);
  cardContent.appendChild(p);
  card.appendChild(cardContent);
  cardContainer.appendChild(card);
  return card;
};
for (let i = 0; i < 24; i++) {
  let index = i % 8;
  createCard(cards[index]);
}

let isCeiling = false;
window.addEventListener("wheel", (e) => {
  const scrollPositionY = e.deltaY;
  if (scrollPositionY < 0 && !isCeiling) {
    document.documentElement.style.background = "white";
    isCeiling = true;
  } else if (scrollPositionY > 0 && isCeiling) {
    document.documentElement.style.background = "#BB595F";
    isCeiling = false;
  }
});
