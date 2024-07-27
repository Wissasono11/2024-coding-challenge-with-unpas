// WPU Coding Challenge 2024
// 33/366
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
    let wadah = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== wadah + 1){
            return arr[i]
        }
        wadah = arr[i]
    }
    return null
}

// find vers gacor 
function firstNonConsecutive(arr){
    return arr.find((e, i) => e !== arr[0] + i) ?? null
}

//one-liner lover
const firstNonConsecutive = arr => arr.find((e, i) => e !== arr[0] + i) ?? null

console.log(firstNonConsecutive([1,2,3,4]))