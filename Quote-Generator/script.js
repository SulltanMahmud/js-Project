const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// show New Quote
function newQuote() {
  // pick a random quote from apiQuotes array

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //   Check if Author field is blank and replace it with "unknow"

  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // Check Quote length to datermine styling
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;

  //   authorText.textContent =quote.author;
  quoteText.textContent = quote.text;
}

// Get Quotes from api
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch error here
  }
}

// use loacal  api

// function newQuote(){
//     // Pick a random quote from local apiQuotes
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// }
// On load

// Tweet Quote

function tweetQuote() {
    const twitterUrl = `https:twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
 
    window.open(twitterUrl, '_blank');
}


// event listener

newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)


getQuotes();
