// /* eslint-disable */
import "bootstrap";
import "./style.css";
// import { NoEmitOnErrorsPlugin } from "webpack";

window.onload = function() {
  if (document.readyState === "complete") {
    // const cardValue = document.querySelector("strong");
    // cardValue.innerHTML = chooseRandomItem(cardValues);

    // const cardSuits = document.querySelectorAll(".suit-icon");
    // const suit = chooseRandomItem(suitTags);
    // for (let cardSuit of cardSuits) {
    //   cardSuit.innerHTML = suit;
    // }

    const card = document.querySelector(".card");
    const newTopRow = buildTopOrBottomRow("top");
    // const newMiddleRow = buildMiddleRow();
    const newBottomRow = buildTopOrBottomRow("bottom");
    card.appendChild(newTopRow);
    // card.appendChild(newMiddleRow);
    card.appendChild(newBottomRow);

    // const button = document.querySelector("button");
    // button.addEventListener("click", refreshPage);
    // button.style.display = "block";
  }
};

const heartsImageTag = "../src/assets/img/heart.svg";
const spadesImageTag = "../src/assets/img/spade.svg";
const clubsImageTag = "../src/assets/img/club.svg";
const diamondsImageTag = "../src/assets/img/diamond.svg";

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

// const card = document.querySelector(".card");

function buildTopOrBottomRow(sideOfCard) {
  const topOrBottomRow = document.createElement("div");

  if (sideOfCard === "top") {
    topOrBottomRow.setAttribute("class", "top-and-bottom");
  } else if (sideOfCard === "bottom") {
    topOrBottomRow.setAttribute("class", "top-and-bottom rotated");
  }

  const p = document.createElement("p");
  const strong = document.createElement("strong");
  const image = document.createElement("img");
  image.setAttribute("class", "corner-img");
  const cardValue = document.createTextNode(chooseRandomItem(cardValues));
  strong.appendChild(cardValue);
  p.appendChild(strong);
  const suit = chooseRandomItem(suitTags);
  image.src = suit;
  topOrBottomRow.appendChild(p);
  topOrBottomRow.appendChild(image);
  return topOrBottomRow;
}

function buildMiddleRow() {
  const middleRow = document.createElement("div");
  middleRow.setAttribute("class", "middle");
  const image = document.createElement("img");
  image.setAttribute("class", "center-img");
  const suit = chooseRandomItem(suitTags);
  image.src = suit;
  middleRow.appendChild(image);
  return buildMiddleRow;
}

// var element = document.getElementById("myDIV");
// element.classList.add("mystyle");
