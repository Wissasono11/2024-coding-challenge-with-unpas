//2024 Coding Challenge with WPU
//day 20/366
//https://www.codewars.com/kata/5aa736a455f906981800360d

function feast(beast, dish) {
    if(beast[0] === dish[0] && (beast[beast.length - 1] === dish[dish.length - 1])) return true 
    else return false
}

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

// at vers
function feast(beast, dish) {
    return beast.at(0) === dish.at(0) && beast.at (-1) === dish.at(-1)
}

//one-liner lover
const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false

//one-liner lover2
const feast = (beast, dish) => beast.at(0) === dish.at(0) && beast.at (-1) === dish.at(-1)

console.log(feast("brown bear", "bear claw"));