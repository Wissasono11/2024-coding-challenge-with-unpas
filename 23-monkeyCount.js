//2024 Coding Challenge with WPU
//day 23/366
//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

function monkeyCount(n) {
    const result = []; 
    for(let i = 1; i <= n; i++){
        result.push(i)
    }
    return result
}

//Array.from vers
function monkeyCount(n) {
   return Array.from({length: n}, (v, i) => i + 1)
}

//one-liner vers
const monkeyCount = n => Array.from({length: n}, (v, i) => i + 1)

console.log(monkeyCount(10));


