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

  let startingQuote = quotes.stating_quotes[getRandomInt(10)];
  let middleQuote = quotes.middle_quotes[getRandomInt(10)];
  let endingQuote = quotes.ending_quotes[getRandomInt(10)];

  fullQuote = `${startingQuote} ${middleQuote} ${endingQuote}.`;
  return fullQuote;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
