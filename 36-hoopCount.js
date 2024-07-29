// WPU Coding Challenge 2024
// 36/366
// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145

function hoopCount(n){
    if(n >= 10){
        return "Great, now move on to tricks"
    } else{
        return "Keep at it until you get it"
    }
}

//switch case vers
function hoopCount(n){
    switch(true){
        case(n >= 10):
            return "Great, now move on to tricks"
        case(n <= 10):
            return "Keep at it until you get it"
    }
}

//ternary vers
function hoopCount(n){
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

//one-liner lover
const hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

console.log(hopeCount(3))
