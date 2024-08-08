//day 45/366
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018

//ngeribetin diri vers
function reversedString(str){
    let result = ''
    for (let i = 0; i < str.length; i++){
        result = str
        .split('')
        .reverse()
        .join('')
    }
    return result
}

function reversedString(str){
    let result = ''

    for(i = 0; i < str.length; i++){
        result = str[i] + result
    }
    return result 
}

//fancy vers
function reversedString(str){
    return str.split('').reverse().join('')
}

//one-liner lover
const solutions = str => str.split('').reverse().join('')

console.log(reversedString('yaam kairi kita lagi demam'))