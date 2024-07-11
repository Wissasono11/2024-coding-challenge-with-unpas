//2024 Coding Challenge with WPU
//day 8/366

// var countSheep = function (num){
//     let result = '';
//     for (let i = 1; i <= num; i++){
//         result += i + ' sheep...';
//     }
//     return result;
//   }
// console.log(countSheep(3));

//agak vancy (string literal)
// var countSheep = function (num){
//     let result = '';
//     for (let i = 1; i <= num; i++){
//         result += `${i} sheep...`
//     }
//     return result;

// }
// console.log(countSheep(3));

//mapping vers
// var countSheep = function(num){
//     return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');
// }
// console.log(countSheep(3));

//one-liner lover
const countSheep = (num) => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

console.log(countSheep(10));