//2024 Coding Challenge with UNPAS
//day 3/366

// function hero(bullets, dragons){
//     if(bullets / 2 >= dragons){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(hero(10, 5)); 

//rada advance 
// function hero(bullets, dragons){
//     return bullets / 2 >= dragons;
// }
// console.log (hero(10, 5));

//one-liner lover
const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5));