//day 44/366
//https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr){
    let result = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0 ){
            result += arr[i]
        }
    }
    return result
}

//reduce vers
function positiveSum(arr){
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)
}

// array filter vers
function positiveSum(arr){
    return arr.filter(i => i > 0).reduce((a, b) => a + b, 0)
}

//one-liner lover
const positiveSum = arr => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)

console.log(positiveSum([1,-2,3,4,5]))

