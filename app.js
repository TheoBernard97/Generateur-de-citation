/** @format */

import quotes from "./assets/quotes.js";

let quoteQuantity = 1;
const minQuoteQuantity = 1;
const maxQuoteQuantity = 5;

const btn = document.getElementById("btn");
const displayedQuote = document.getElementById("result");
btn.addEventListener("click", () => {
  let fullQuote = quoteGenerator();
  displayedQuote.innerHTML = fullQuote;
});

function quoteGenerator() {
  let fullQuote = "";

  let startingQuote = quotes.stating_quotes[getRandomInt(quotes.stating_quotes.length)];
  let middleQuote = quotes.middle_quotes[getRandomInt(quotes.middle_quotes.length)];
  let endingQuote = quotes.ending_quotes[getRandomInt(quotes.ending_quotes.length)];

  fullQuote = `${startingQuote} ${middleQuote} ${endingQuote}.`;
  return fullQuote;
}

function updateSettings(input) {
  numberOfQuotesToGenerate = input;
  displayNewSettings();
}

function displayNewSettings() {
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
