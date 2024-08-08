//day 46/366
//https://www.codewars.com/kata/5265326f5fda8eb1160004c8

function numberToString(num){
    let newNum = '';

    for(let i = 0; i < num.toString.length; i++){
        newNum += num.toString();
    }
    return newNum;
}

//String vers
function numberToString(num) {
    return String(num)
}

//one-liner lover
const numberToString = num => String(num)

console.log(numberToString(70))