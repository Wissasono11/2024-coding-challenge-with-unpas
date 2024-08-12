//day 50/366
//https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
    let result = ''
    const newNumStr = num.toString();

    for(let i = 0; i < newNumStr.length; i++){
        let digits = parseInt(newNumStr[i])
        let squared = digits * digits

        result += squared
    }
    return parseInt(result)
}

//gacorrrrrr version
function squareDigits(num){
    return +String(num).split('').map(e => (+e) ** 2).join('')
}

//one-liner lover
const squareDigits = num => +String(num).split('').map(e => (+e) ** 2).join('')

console.log(squareDigits(3212)) //9-4-1-4