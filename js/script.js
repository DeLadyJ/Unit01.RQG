/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
//Jane Lewis

///Create a variable quote array
//Get five quotes and put them in the quote arry with the source (citation and year) property
//Use console.log fuction to log to console

//Create a random number function that picks a number from 0 to the length of the array - this will create the array index numbers
//Create a getElementID string to get the quote 

//Create a HTML string that includes the quote and source (add citation and year if available)
//Create a print function to get the quotes and print them to the document
//Use the if stsement to check for the citation and year of the quote 

//Create a button that responds to an event listener when clicked and triggers the random quote generator

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// quote array
var quotes  (
  {quote: 'What God intended for you goes far beyond anything you can imagine.',
  source: "Oprah Winfrey",
  tag: "Insporational"},

  {quote: 'There are still many causes worth sacrificing for/, so much history yet to be made.',
  source: "Michelle Obama",
  tag: "Inspirational"},

  {quote: 'Positivity/, confidence/, and persistence are key in life/, so never give up on yourself.',
  source: "Khalid",
  tag: "Life"},

  {quote: 'I always believed that when you follow your heart or your gut/, when you really follow the things that feel great to you/, you can never lose/, because settling is the worst feeling in the world.',
  source: "Rihanna",
  tag: "Life"},
  
  {quote: 'Don/’t worry about a thing/, /‘Cos every little thing is gonna be alright.',
  source: "Bob Marley", 
  tag: "Wisdom",
  citation: "Three Little Birds/, from the album Exodus",
  year: "1977"}
);

//loga quote to console
//console.log (quote);


//colors used for array
 var colors = ['red', 'blue', 'green', 'yellow'];
//setInterval(('Color'),3000);
  
//calls a random quote then returns the quote
function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}


//calls a random color then returns the color
function getRandomQuoteColor(){
    let randomNumber = Math.floor(Math.random() * colors.length);
      return colors[randomNumber];
  } 


//print function, .innerHTML will get random quote, quote will display
var quotes = getRandomQuote();{
html = ();
html += '<p class="quote">' + quotes.quote + '<p/>';
html += '<p class="source">' + quotes.source;
html += '<p class="tag' + quotes.tag ;
document.getElementById('quote-box').InnerHTML = getRandomQuote;
}

if (quote.citation) {
html += '<span class="citation">' + quote.citation + '</span>';
}

if (quote.year) {
html += '<span class="year">' + quote.year + '</span>';
}

console.log(quote);


//This launches the quote when button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.