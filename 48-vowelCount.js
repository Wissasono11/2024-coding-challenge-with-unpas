//7 kyu
//day 48/366
//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str){
    let result = 0
    for(let i = 0 ; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o'){
            result++
        }      
    }
    return result
}

//includes vers
function getCount(str){
    let result = 0
    for(let i = 0; i < str.length; i++){
        if("aiueo".includes(str[i])){
            result += 1
        }
    }
    return result
}

//replace vers
function getCount(str){
    return str.replace(/[^aiueo]/g,"").length
}

//one-liner lover
const getCount = str => str.replace(/[^aiueo]/g,"").length

//match vers
function getCount(str){
    return str.match(/[^aiueo]/g,"").length
    
}

//one-liner lover
const getCount = str => str.match(/[^aiueo]/g,"").length

console.log(getCount('pear tree'))