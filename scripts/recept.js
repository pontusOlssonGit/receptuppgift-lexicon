const params = new URLSearchParams(window.location.search);

const nameFromUrl = params.get("recipe");
const imageSrc = params.get("image");

const h1 = document.getElementById("hero-id");
const img = document.getElementById("hero-img");

if (nameFromUrl) {
  h1.textContent = nameFromUrl;
} else {
  h1.textContent = "";
}
if (imageSrc) {
  img.src = imageSrc;
} else {
  img.src = "/images/pancake-header.jpg";
}


let rating = 0;
// OVERSCROLL BG COLOR FIX

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


const instructionClick = (listItem) => {

    if(!listItem.style.textDecoration || listItem.style.textDecoration==='none'){
         listItem.style.textDecoration='line-through'
    } else{
         listItem.style.textDecoration='none'
    }
    
}

const setRating = (value) => {
  rating = value;
  console.log(rating);
  setStarColors();
  document.getElementById("ratingNumber").textContent = rating;
  document.getElementById("ratingButton").disabled = false;
  
}

const setStarColors = () => {

    for(let i = 0; i<5; i++){
        document.getElementById("star"+(i+1)).style.filter='contrast(0)'
    }
    for(let i = 0; i<rating; i++){
      document.getElementById("star"+(i+1)).style.filter='none'
    }
}