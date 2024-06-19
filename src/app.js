/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here\
  const cardValue = document.querySelector("strong");
  cardValue.innerHTML = chooseRandomItem(cardValues);

  const cardSuit = document.querySelector(".suit-icon");
  cardSuit.innerHTML = chooseRandomItem(cardSuits);
};

const heartsImageTag =
  '<img src="../src/assets/img/heart.svg" alt="hearts suit icon" class="img-size"/>';
const spadesImageTag =
  '<img src="../src/assets/img/spade.svg" alt="spades suit icon" class="img-size">';
const clubsImageTag =
  '<img src="../src/assets/img/club.svg" alt="clubs suit icon" class="img-size">';
const diamondsImageTag =
  '<img src="../src/assets/img/diamond.svg" alt="diamonds suit icon" class="img-size">';

const cardSuits = [
  heartsImageTag,
  spadesImageTag,
  clubsImageTag,
  diamondsImageTag
];

const cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function chooseRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// const cardValue = document.querySelector("strong");
// cardValue.innerHTML = chooseRandomItem(cardValues);

// const cardSuit = document.querySelector(".suit-icon");
// cardSuit.innerHTML = chooseRandomItem(cardSuits);
