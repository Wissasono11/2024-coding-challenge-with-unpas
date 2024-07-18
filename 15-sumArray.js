//2024 Coding Challenge with WPU
//day 15/366
//https://www.codewars.com/kata/576b93db1129fcf2200001e6

// function sumArray(array) {
    if(array == null || array.length <= 2) return 0;
    const sorted = array.sort((a,b) => a-b) 
         // return sorted -> [1, 2, 6, 8, 10]
    let result = 0;
    for (i = 1; i < sorted.length - 1; i++){
        result += sorted[i]; 
    }
    return result;

}
console.log(sumArray([ -6, -20, -1, -10, -12 ]));

//slice reduce vers
function sumArray(array) {
    if(array == null || array.length <= 2) return 0;
    return array.sort((a,b) => a-b).slice(1, -1).reduce((acc, curr) => acc + curr) 
}
console.log(sumArray([ 6, 2, 1, 8, 10 ]));

//one-liner lover
const sumArray = (array) => array == null || array.length <= 2 ? 0 : array.sort((a,b) => a-b).slice(1, -1).reduce((acc, curr) => acc + curr)
console.log(sumArray([ 6, 2, 1, 8, 10 ]));

const sumArray = array => array ? array.sort((a,b) => a-b).slice(1, -1).reduce((acc, curr) => acc + curr, 0) : 0
console.log(sumArray([ 6, 2, 1, 8, 10 ]));