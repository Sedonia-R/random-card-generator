window.onload = function() {
  if (document.readyState === "complete") {
    const newDeckButton = document.querySelector("#newDeck");
    const newCardButton = document.querySelector("#nextCard");
    newDeckButton.addEventListener("click", refreshPage);
    newDeckButton.style.display = "block";
    newCardButton.addEventListener("click", addNewCardToDeck);
    newCardButton.style.display = "block";
    const cardBackDiv = document.querySelector("#card-back");
    const cardBack = document.createElement("img");
    cardBack.setAttribute("src", "../src/assets/img/card_back2.jpg");
    cardBack.setAttribute("class", "card-back-image");
    cardBackDiv.append(cardBack);
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
    let tagPlusValue = [];
    tagPlusValue.push(`${suitTags[suitTag]}`);
    tagPlusValue.push(`${cardValues[cardValue]}`);
    allCardOptions.push(tagPlusValue);
  }
}

function selectSuitAndValueFromAllOptions(array) {
  const randomIndex = chooseRandomIndex(array);
  return array.splice(randomIndex, 1);
}

function constructEachRandomCard(array) {
  const suitAndValue = selectSuitAndValueFromAllOptions(array);
  const suit = suitAndValue[0][0];
  const value = suitAndValue[0][1];
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  const newTopRow = buildTopOrBottomRow("top", value, suit);
  const newMiddleRow = buildMiddleRow(suit);
  const newBottomRow = buildTopOrBottomRow("bottom", value, suit);
  card.appendChild(newTopRow);
  card.appendChild(newMiddleRow);
  card.appendChild(newBottomRow);
  return card;
}

function addNewCardToDeck() {
  if (allCardOptions.length !== 0) {
    const newCard = constructEachRandomCard(allCardOptions);
    const boxDiv = document.querySelector(".box");
    boxDiv.appendChild(newCard);
  } else if (allCardOptions.length === 0) {
    alert("That's all 52 cards! Press 'New Deck' to start again.");
  }
}
