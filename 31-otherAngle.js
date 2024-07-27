//2024 Coding Challenge with WPU
//day 31/366
//https://www.codewars.com/kata/5a023c426975981341000014

function otherAngle(a, b) {
    return 180 - (43 + 78)
}
  
//one-liner lover
const otherAngle = (a, b) => 180 - (a + b)

//if-else vers
function otherAngle(a, b) {
    if(a < 0 || b < 0){
        return 0;
    }
    if((a + b)>= 180){
        return 0;
    }
    else{
        return 180 - (a + b)
    }
}
console.log(otherAngle(43, 78))
  