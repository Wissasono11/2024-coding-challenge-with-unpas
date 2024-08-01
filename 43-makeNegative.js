//day 43/366
//https://www.codewars.com/kata/55685cd7ad70877c23000102

// function makeNegative(num) {
//     return -Math.abs(num)
// }

//if-else vers
function makeNegative(num){
    if(num > 0) return num = -num 
    if(num < 0 || num === 0) return num = num
}

//ternary if-else vers
function makeNegative(num){
    return num > 0 ? -num : num < 0 || num === 0 ? num : _
}

//switch case vers
function makeNegative(num){
    switch(true){
        case(num > 0):
            return num = -num
        case(num < 0 || num === 0):
            return num = num
    }
}

//ternary vers
function makeNegative(num){
    return num > 0 ? num = -num : num
}

//one-liner ternary
const makeNegative = num => num > 0 ? num = -num : num

//one-liner lover
const makeNegative = num => -Math.abs(num)

console.log(makeNegative(-42))