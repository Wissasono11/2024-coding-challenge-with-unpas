// WPU Coding Challenge 2024
// 35/366
// https://www.codewars.com/kata/55cbc3586671f6aa070000fb

function checkForFactor (base, factor) {
    if(base % factor == 0){
        return true
    } else{
        return false
    }
}

//ternary
function checkForFactor (base, factor){
    return base % factor = 0 ? true : false
}

//switch-case vers
function checkForFactor (base, factor){
    switch(true){
        case(base % factor == 0):
            return true
        case(base % factor != 0):
            return false
    }
}

//one-liner lover
const checkForFactor = (base, factor) => base % factor == 0 ? true : false

console.log(checkForFactor(9, 3))