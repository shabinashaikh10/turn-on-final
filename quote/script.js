let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let bttn = document.getElementById("bttn");

const url = ' https://zenquotes.io/api/quotes ';
// const url1 ="http://api.quotable.io/random"
let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};
// let getQuote1 = () => {
//     fetch(url1)
//       .then((data) => data.json())
//       .then((item) => {
//         quote.innerText = item.content;
//         author.innerText = item.author;
//       });
//   };
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
bttn.addEventListener("click", getQuote1);