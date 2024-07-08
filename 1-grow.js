// 2024 Coding Challenge with WPU
// 1/366

// function grow(x){
//     let hasil = x[0];
//     for(let i = 1; i < x.length; i++){
//         hasil *= x[i]
//     }
//     return hasil;
// }
// console.log(grow([1, 2, 3, 4]))


// reduce = menerima 2 nilai 1.accumulator 2.current
//accumulator = nilai hasil  
//current = nilai ketika menelusuri array
// function grow(x){
//     const hasil   = x.reduce((acc, curr) =>  acc * curr, 1)
//     return hasil  
// }
// console.log(grow([1, 2, 3, 4]))

// one-liner lover
const grow = (x) => x.reduce((acc, curr) =>  acc * curr, 1)
       
console.log(grow([1, 2, 3, 4]))
