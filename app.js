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
const philosophicalRadio = document.getElementById('philosophical');
const bullshitlRadio = document.getElementById('bullshit');
let quoteType = document.querySelector('input[name="quote"]:checked').value + "_quotes";

setupEventListeners();

function setupEventListeners() {
  document.addEventListener("click", (event) => {
    if (event.target === btn) {
      displayQuotes(quoteQuantity);
    }
    if (event.target === incrementQuotes && maxQuoteQuantity > quoteQuantity) {
      quoteQuantity++;
      updateSettings();
    }
    if (event.target === decrementQuotes && minQuoteQuantity < quoteQuantity) {
      quoteQuantity--;
      updateSettings();
    }
    if (event.taget === philosophicalRadio || bullshitlRadio){
      updateSettings();
    }
  });
}

function quoteGenerator() {
  let fullQuote = "";

  let startingQuote =
    quotes[quoteType].starting_quotes[getRandomInt(quotes[quoteType].starting_quotes.length)];
  let middleQuote =
    quotes[quoteType].middle_quotes[getRandomInt(quotes[quoteType].middle_quotes.length)];
  let endingQuote =
    quotes[quoteType].ending_quotes[getRandomInt(quotes[quoteType].ending_quotes.length)];

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
  numberOfQuotes.innerHTML = quoteQuantity;
  quoteType = document.querySelector('input[name="quote"]:checked').value + "_quotes";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
