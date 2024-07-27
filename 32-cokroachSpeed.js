//2024 Coding Challenge with WPU
//day 32/366
//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

function cockroachSpeed(s) {
    return Math.floor(s * (100000 / 3600))
  }

//one-liner lover
const cockroachSpeed = s => Math.floor(s * (100000 / 3600))

//mabok ini mah cui 
function cockroachSpeed(s){
    if(s <= 0){
        return 0
    }
    if(s < 0){
        return ~~(100000 / 3600 * (s))
    } 
    else{
        return Math.floor(s * (100000 / 3600))
    }
}
console.log(cockroachSpeed(-1.08))
