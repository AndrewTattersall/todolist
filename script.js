//Quote array
const quotes = [
  {
    quote: 'Java is to JavaScript what car is to Carpet',
    source: 'Chris Heilmann'
  },
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: 'Twitter',
    year: '2016'
  },
  {
    quote: 'The best time to plant a tree was 20 years ago. The second best time is now',
    source: 'Chinese proverb'
  },
  {
    quote: 'Code is like humor. When you have to explain it, it’s bad.',
    source: 'Cory House'
  },
  {
    quote: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight',
    source: 'Bill Gates'
  },
  {
    quote: 'One man’s crappy software is another man’s full time job',
    source: 'Jessica Gaston'
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
    source: 'Martin Golding'
  },
  {
    quote: 'Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time',
    source: 'N.J. Rubenking'
  }
]

const quoteBox = document.querySelector('.quote-box')

//function to get random quote from array
const getRandomQuote = () => {
  let randomNumber = Math.floor((Math.random() * 6) + 1);
  return quotes[randomNumber];
}

//function to update UI with quote
const printQuote = () => {
  let quote = getRandomQuote()

  let quoteTemplate =
    `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`

  //conditionals to check if quote has citation/year
  if (quote.citation) {
    quoteTemplate += ` <span class="citation">${quote.citation}</span>`
  } if (quote.year) {
    quoteTemplate += ` <span class="citation">${quote.year}</span>`
  }

  quoteTemplate += `</p>`
  return quoteBox.innerHTML = quoteTemplate
}

//Event listener on button to call printQuote
document.getElementById('load-quote').addEventListener("click", printQuote);