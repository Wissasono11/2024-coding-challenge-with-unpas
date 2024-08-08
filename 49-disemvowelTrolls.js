//day 49/366
//https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(!'aiueo'.includes(str[i].toLowerCase())){
            newStr += str[i]
        }
    }
    return newStr;
}

//regex vers
function disemvowel(str){
    return str.replace(/[aiueo]/gi,'')
}

//one-liner lover
const disemvowel = str => str.replace(/[aiueo]/gi, '')

console.log(disemvowel("What are you, a communist?")) 