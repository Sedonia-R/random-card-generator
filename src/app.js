// /* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  if (document.readyState === "complete") {
    // const card = document.querySelector(".card");
    // const newTopRow = buildTopOrBottomRow("top");
    // const newMiddleRow = buildMiddleRow();
    // const newBottomRow = buildTopOrBottomRow("bottom");
    // card.appendChild(newTopRow);
    // card.appendChild(newMiddleRow);
    // card.appendChild(newBottomRow);

    const button = document.querySelector("button");
    button.addEventListener("click", refreshPage);
    button.style.display = "block";

    constructEachRandomCard(allCardOptions);
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

function chooseRandomIndex(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function refreshPage() {
  window.location.reload();
}

// const value = cardValues[chooseRandomIndex(cardValues)];
// const suit = suitTags[chooseRandomIndex(suitTags)];

function buildTopOrBottomRow(sideOfCard, value, suit) {
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
  const cardValue = document.createTextNode(value);
  strong.appendChild(cardValue);
  p.appendChild(strong);
  image.src = suit;
  topOrBottomRow.appendChild(p);
  topOrBottomRow.appendChild(image);
  return topOrBottomRow;
}

function buildMiddleRow(suit) {
  const middleRow = document.createElement("div");
  middleRow.setAttribute("class", "middle");
  const image = document.createElement("img");
  image.setAttribute("class", "center-img");
  image.src = suit;
  middleRow.appendChild(image);
  return middleRow;
}

const allCardOptions = [];
for (let suitTag in suitTags) {
  for (let cardValue in cardValues) {
    allCardOptions.push([`${suitTags[suitTag]}`, `${cardValues[cardValue]}`]);
  }
}

function selectSuitAndValueFromAllOptions(array) {
  const randomIndex = chooseRandomIndex(array);
  console.log(array.splice(randomIndex, 2));
  return array.splice(randomIndex, 1);
}

function constructEachRandomCard(array) {
  // for (let i = 0; i < array.length; i++) {
  const suitAndValue = selectSuitAndValueFromAllOptions(array);
  console.log(suitAndValue.length);
  const suit = suitAndValue[0];
  // console.log(suit.length);
  const value = suitAndValue[1];
  // console.log(value);
  const card = document.querySelector(".card");
  const newTopRow = buildTopOrBottomRow("top", value, suit);
  const newMiddleRow = buildMiddleRow(suit);
  const newBottomRow = buildTopOrBottomRow("bottom", value, suit);
  card.appendChild(newTopRow);
  card.appendChild(newMiddleRow);
  card.appendChild(newBottomRow);
  return card;
  // }
}
