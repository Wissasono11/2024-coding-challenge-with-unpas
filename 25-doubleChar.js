//2024 Coding Challenge with WPU
//day 25/366
//https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
    let result = ''; 
    for(let i = 0; i < str.length; i++){
        result += str[i] + str[i] 
    }
    return result
  }

//separated function vers
function doubleChar(str) {
    return [...str]
    .map(el => el + el)
    .join('')
  }

//split vers
function doubleChar(str) {
    return str
    .split('')
    .map(el => el + el)
    .join('')
  }
  //one-liner vers
  
const doubleChar = str => str.split('').map(el => el + el).join('')
  
console.log(doubleChar("Klaus"));
  