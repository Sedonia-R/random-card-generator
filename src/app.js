/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here\
  if (document.readyState === "complete") {
    const cardValue = document.querySelector("strong");
    cardValue.innerHTML = chooseRandomItem(cardValues);

    const cardSuit = document.querySelector(".suit-icon");
    cardSuit.innerHTML = chooseRandomItem(cardSuits);

    // document.body.insertBefore(topCornerSuit, secondToTopDiv);
    // secondToBottomDiv.insertAdjacentElement("afterend", bottomCornerSuit);

    const button = document.querySelector("button");
    button.addEventListener("click", refreshPage);
  }
};

// const suit = chooseRandomItem(cardSuits);
// const topCornerSuit = document.createElement("div");
// topCornerSuit.className = "div-cols suit-icon";
// const suitImgTaG = document.createTextNode(suit);
// console.log(suitImgTaG);
// topCornerSuit.appendChild(suitImgTaG);
// const secondToTopDiv = document.querySelector("#second-to-top");
// // document.body.insertBefore(topCornerSuit, secondToTopDiv);

// const bottomCornerSuit = document.createElement("div");
// bottomCornerSuit.className = "div-cols suit-icon rotated";
// bottomCornerSuit.appendChild(suitImgTaG);
// const secondToBottomDiv = document.querySelector("#second-from-bottom");
// // secondToBottomDiv.insertAdjacentElement("afterend", bottomCornerSuit);

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

function refreshPage() {
  window.location.reload();
}
