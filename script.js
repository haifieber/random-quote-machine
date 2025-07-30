// HTML elements
const quoteElement = document.getElementById("text");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

function showRandomQuote(){
    // Random Quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteElement.innerHTML = quote.quote;
    authorElement.innerHTML = `– ${quote.author}`;

    // Random Color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
   
    document.body.style.backgroundColor = randomColor;
    quoteElement.style.color = randomColor;
    authorElement.style.color = randomColor;

    // Random Color to div with links and btn 
    const buttons = document.querySelectorAll("#tweet-quote, #tumblr-quote, #new-quote");
    buttons.forEach(btn => {
      btn.style.backgroundColor = randomColor;
      btn.style.borderColor = randomColor;
});
}


// directly at loading
window.onload = showRandomQuote;

// Button-Click
newQuoteBtn.addEventListener("click", showRandomQuote);
