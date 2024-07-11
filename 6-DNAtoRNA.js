//2024 Coding Challenge with WPU
//day 6/366

// function DNAtoRNA(dna) {
//    let rna = '';
//    for(let i = 0; i < dna.length; i++){
//     if(dna[i] === 'T'){
//         rna += 'U';
//     } else{
//     rna += dna[i];
//     }
//    }
//     return rna;
//   }
// console.log(DNAtoRNA('TTTT'));

//ternary vers
// function DNAtoRNA(dna) {
//     let rna = '';
//     for(let i = 0; i < dna.length; i++){
//         rna += dna[i] === 'T' ? 'U' : dna[i]
//     }
//      return rna;
//    }
//  console.log(DNAtoRNA('GCAT'));

 //split, map, join vers
// function DNAtoRNA(dna){
//     return dna
//     .split('')
//     .map((el) => (el === 'T' ? 'U' : el))
//     .join(''); 
// }
// console.log(DNAtoRNA('GCAT'));

//one-liner lover
// const DNAtoRNA = dna => dna.split('').map((el) => (el === 'T' ? 'U' : el)).join('')

// console.log(DNAtoRNA('GCAT'));

//replace vers 
// const DNAtoRNA = dna => dna.replaceAll('T', 'U');

// console.log(DNAtoRNA('GCAT'))

//split dan join

function DNAtoRNA(dna){
    return dna.split("T").join("U");
}
console.log(DNAtoRNA('GCAT'));



 