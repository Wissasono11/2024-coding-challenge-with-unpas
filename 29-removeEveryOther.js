//2024 Coding Challenge with WPU
//day 29/366
//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

function removeEveryOther(arr){
    let result = [];
    for(let i = 0; i < arr.length; i += 2){
        result.push(arr[i])
    }
    return result
}

//arr.filter vers
function removeEveryOther(arr){
    // return arr.filter((_, i) => i % 2 == 0)
    return arr.filter((_, i) => !(i & 1));
}

//one-liner vers
const removeEveryOther = arr => arr.filter((_, i) => !(i & 1))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));