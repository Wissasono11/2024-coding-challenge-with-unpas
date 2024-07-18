//2024 Coding Challenge with WPU
//day 16/366
//https://www.codewars.com/kata/563e320cee5dddcf77000158

//Math.floor => pembulatan ke bawah
//Math.ceil => pembulatan ke atas
//Math.round => pembulatan ke nilai terdekat

function getAverage(marks){
    let total = 0;
    for (let i = 0; i < marks.length; i++){
        total += marks[i];
    }
    return Math.floor (total / marks.length); //pembulatan ke bawah
}
console.log(getAverage([1,2,3,4,5,]));

//reduce vers
function getAverage(marks){
    return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}
console.log(getAverage([1,2,3,4,5,]));

//one-liner lover
const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
 
console.log(getAverage([1,2,3,4,5,]))