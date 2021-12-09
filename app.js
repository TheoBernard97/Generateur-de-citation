/** @format */

import quotes from "./assets/quotes.js";

const btn = document.getElementById("btn");
const displayedQuote = document.getElementById("result");
btn.addEventListener("click", () => {
  let fullQuote = quoteGenerator();
  displayedQuote.innerHTML = fullQuote;
});

function quoteGenerator() {
  let fullQuote = "";

  let x = quotes[getRandomInt(10)];
  let y = quotes[getRandomInt(10)];
  let z = quotes[getRandomInt(10)];

  while (y === x) {
    y = quotes[getRandomInt(10)];
  }

  while (z === x || z === y) {
    z = quotes[getRandomInt(10)];
  }

  fullQuote = quotes[x] + " " + quotes[y] + " " + quotes[z];
  return fullQuote;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
