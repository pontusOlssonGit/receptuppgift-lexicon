const params = new URLSearchParams(window.location.search);

const nameFromUrl = params.get("recipe");
const imageSrc = params.get("image");

document.getElementById("title").textContent = nameFromUrl

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
let numberOfRatings = 0;
const ratings = [];

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
const form = document.getElementById("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('ratingModal').close()
    numberOfRatings++;


    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    
    ratings.push(data.rating)
    

    calculateRatings();
    
    document.getElementById('numberOfRatings').textContent = numberOfRatings;

});

const calculateRatings = () => {
  let totalRating = 0;
  ratings.forEach(rating => {
    totalRating+= parseInt(rating)
  });
  let average = Math.floor(totalRating/numberOfRatings);

    for(let i = 0; i<5; i++){
        document.getElementById("nonModalStar"+(i+1)).style.filter='contrast(0)'
    }
    for(let i = 0; i<average; i++){
      document.getElementById("nonModalStar"+(i+1)).style.filter='none'
    }
  
  

}

