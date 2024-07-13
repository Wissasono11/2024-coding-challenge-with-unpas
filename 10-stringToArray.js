//2024 Coding Challenge with WPU
//day 10/366

function stringToArray(string){
    let newStr = "";
    let result = [];
    for(let i=0; i < string.length; i++){
        if (string[i] !== ' '){
            newStr = newStr + string[i]
        } else{
            result.push(newStr);
            newStr = "";
        }
    }
    result.push(newStr);
    return result;
}
console.log(stringToArray("I love arrays they are my favorite"))

//WPU vers
 function stringToArray(string){
    return string.split(' ');
 }
 console.log(stringToArray("I love arrays they are my favorite"))

 //one-liner vers
// const stringToArray = (string) => string.split(' ')

// console.log(stringToArray("I love arrays they are my favorite"))