//2024 Coding Challenge with WPU
//day 7/366

// function countBy(x, n) {
//     let z = [];
//     for(let i = 1; i<=n; i++){
//         z.push(i * x);
//     }
//     return z;
//   }
//   // x=kelipatan bilangan
//   // n=panjang arraynya
// console.log(countBy(2,10));

//another vers
// function countBy(x, n) {
//     return [...Array(n)].map((el, i) => (i + 1) * x);
// }
// console.log(countBy(3, 2));

//one-liner lover
const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

console.log(countBy(2, 5))