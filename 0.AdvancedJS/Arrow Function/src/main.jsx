import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

let numbers = [2, 6, 15, 27, 36, 12, 45];

// Code Shortening with arrow function
/* const newNumbers = numbers.map(function double(x) {
  return x * x;
});

const newNumbers = numbers.map(function (x) {
  return x * x;
});

const newNumbers = numbers.map((x) => {
  return x * x;
});

const newNumbers = numbers.map( x => {
  return x * x;
}); */

// var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

const squaredNum = numbers.map( x => x * x);
console.log(squaredNum);

const shortFilter = numbers.filter( num => num < 10)
console.log(shortFilter);

const shortAccumulate = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber)
console.log(shortAccumulate);

const shortFind = numbers.find(num => num > 10)
console.log(shortFind);

const shortFindIndex = numbers.findIndex(num => num > 10)
console.log(shortFindIndex)
