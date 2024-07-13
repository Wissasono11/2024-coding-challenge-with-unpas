//2024 Coding Challenge with WPU
//day 9/366

// var min = function(list){
//     let minValue = list[0];
//     for(let i = 1; i < list.length; i++){
//         if (minValue > list[i]){ 
//             minValue = list[i]
//         }
//     }
//     return minValue;
// }
// console.log(min([-52, 56, 39, 29, -54, 0, -110]))
// var max = function(list){
//     let maxValue = list[0];
//     for(let i = 1; i < list.length; i++){
//         if (maxValue < list[i]){
//             maxValue = list[i]
//         }
//     }
//     return maxValue;
// }
// console.log(max([-52, 56, 39, 29, -54, 0, -110]))

// pengurutan menggunakan sort vers
// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

// console.log(min([-52, 56, 39, 29, -54, 0, -110]))
// console.log(max([-52, 56, 39, 29, -54, 0, -110]))

// menggunakan function math.min dan math.max
const min = (list) => Math.min(...list)
const max = (list) => Math.max(...list)


console.log(min([-52, 56, 39, 29, -54, 0, -110]))
console.log(max([-52, 56, 39, 29, -54, 0, -110]))
