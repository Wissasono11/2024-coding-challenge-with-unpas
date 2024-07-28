// WPU Coding Challenge 2024
// 34/366
// https://www.codewars.com/kata/5b853229cfde412a470000d0

function twiceAsOld(dadYearsOld, sonYearsOld) {
    if(dadYearsOld >= sonYearsOld){
        return Math.abs(dadYearsOld - (sonYearsOld * 2))
    } else{
        return 0;
    }
}

//ternary vers
function twiceAsOld(dadYearsOld, sonYearsOld){
    return dadYearsOld >= sonYearsOld ? Math.abs(dadYearsOld - (sonYearsOld * 2)) : 0
}

//one-liner lover
const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - (sonYearsOld * 2))

console.log(twiceAsOld(30, 10))