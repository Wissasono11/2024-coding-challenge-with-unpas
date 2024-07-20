//2024 Coding Challenge with WPU
//day 18/366
//https://www.codewars.com/kata/57eaeb9578748ff92a000009

//bisa menggunakan 
// -parseInt
// -Number
// - +'1' atau plus yang di tempel dengan angka yang berbentuk string

function sumMix(x){
    let total = 0;
    for(let i =0; i < x.length; i++){
        total += +x[i]
    }
    return total;
}

//reduce vers
function sumMix(x){
    return x.reduce((acc, curr) => acc + parseInt(curr), 0);
}

//one-liner lover
const sumMix = x => x.reduce((acc, curr) => acc + Number(curr), 0);

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));