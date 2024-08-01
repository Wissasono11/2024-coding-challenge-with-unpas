//day 41/366
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function evenOrOdd(number) {
    if(number % 2 === 0){
        return 'Even'
    } else{
        return 'Odd'
    }
}

//switch case 
function evenOrOdd(number){
    switch(true){
        case (number % 2 === 0):
            return 'Even'
        default:
            return 'Odd'
            
    }
}

//ternary vers
function evenOrOdd(number){
    return number % 2 === 0 ? 'Even' : 'Odd'
}

//one-liner lover
const evenOrOdd = number => number % 2 === 0 ? 'Even' : 'Odd'

console.log(evenOrOdd(-42))