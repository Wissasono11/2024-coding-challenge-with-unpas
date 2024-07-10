//2024 Coding Challenge with UNPAS
//day 2/366

// const reverseSeq = (n) => {
//     const result = []
//     for (let i = n; i >= 1; i--){
//         result.push(i);
//     }
//     return result;
//   };
//   console.log(reverseSeq(5))

//one-liner lover
// reverseSeq = (n) => Array(n).fill().map((el, i) => i + 1).reverse();

// console.log(reverseSeq(5));

//tanpa reverse function
const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));
