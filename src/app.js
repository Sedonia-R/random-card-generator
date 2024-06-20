/* eslint-disable */
import "bootstrap";
import "./style.css";
// import { NoEmitOnErrorsPlugin } from "webpack";

window.onload = function() {
  if (document.readyState === "complete") {
    const cardValue = document.querySelector("strong");
    cardValue.innerHTML = chooseRandomItem(cardValues);

    const cardSuits = document.querySelectorAll(".suit-icon");
    const suit = chooseRandomItem(suitTags);
    for (let cardSuit of cardSuits) {
      cardSuit.innerHTML = suit;
    }

    const button = document.querySelector("button");
    button.addEventListener("click", refreshPage);
    button.style.display = "block";
  }
};

const heartsImageTag =
  '<img src="../src/assets/img/heart.svg" alt="hearts suit icon" class="img-size"/>';
const spadesImageTag =
  '<img src="../src/assets/img/spade.svg" alt="spades suit icon" class="img-size">';
const clubsImageTag =
  '<img src="../src/assets/img/club.svg" alt="clubs suit icon" class="img-size">';
const diamondsImageTag =
  '<img src="../src/assets/img/diamond.svg" alt="diamonds suit icon" class="img-size">';

const suitTags = [
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

function refreshPage() {
  window.location.reload();
}
