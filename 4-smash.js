//2024 Coding Challenge with WPU
//day 4/366

// function smash (words) {
//     return words.join(' ');
//  };
//  console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

 //one-liner lover 
// const smash = (words) => words.join(' ');

// console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

//versi WPU
function smash(words){
    let result = '';
    for (let i = 0; i < words.length; i++){
        result += words[i]
        if(i != words.length - 1)result += ' ';
    }
    return result;
}
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));