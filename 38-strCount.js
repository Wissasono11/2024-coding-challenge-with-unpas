// WPU Coding Challenge 2024
// 38/366
// https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter){
    let countLetter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === letter){
           countLetter++ 
        }
    }
    return countLetter
}

//split vers 
function strCount(str, letter){
    return str.split(letter).length - 1
}

//one-liner vers
const strCount = (str, letter) => str.split(letter).length - 1
console.log(strCount('Klauss', 's'))
