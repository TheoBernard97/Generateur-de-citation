/** @format */

import quotes from "./assets/quotes.js";

let quoteQuantity = 1;
const minQuoteQuantity = 1;
const maxQuoteQuantity = 5;

const btn = document.getElementById("btn");
const resultContainer = document.getElementById("result-container");
const numberOfQuotes = document.getElementById("quote-quantity");
const incrementQuotes = document.getElementById("more");
const decrementQuotes = document.getElementById("less");

setupEventListeners();

function setupEventListeners() {
  document.addEventListener("click", (event) => {
    if (event.target === btn) {
      displayQuotes(quoteQuantity);
    }
    if (event.target === incrementQuotes && maxQuoteQuantity > quoteQuantity) {
      console.log("+");
      quoteQuantity++;
      updateSettings();
    }
    if (event.target === decrementQuotes && minQuoteQuantity < quoteQuantity) {
      quoteQuantity--;
      updateSettings();
    }
  });
}

function quoteGenerator() {
  let fullQuote = "";

  let startingQuote =
    quotes.stating_quotes[getRandomInt(quotes.stating_quotes.length)];
  let middleQuote =
    quotes.middle_quotes[getRandomInt(quotes.middle_quotes.length)];
  let endingQuote =
    quotes.ending_quotes[getRandomInt(quotes.ending_quotes.length)];

  fullQuote = `${startingQuote} ${middleQuote} ${endingQuote}.`;
  return fullQuote;
}

function displayQuotes(value) {
  resultContainer.innerHTML = "";
  for(let i = 0; i < value; i++){
    const quote = quoteGenerator();
    const tag = document.createElement("p");
    const text = document.createTextNode(quote);
    tag.appendChild(text);
    resultContainer.appendChild(tag);
  }
}

function updateSettings() {
  console.log("updateSettings");
  numberOfQuotes.innerHTML = quoteQuantity;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
