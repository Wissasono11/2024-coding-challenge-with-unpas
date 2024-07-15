//2024 Coding Challenge with WPU
//day 12/366

function arrayPlusArray(arr1, arr2) {
    let total = 0;
    for (let i = 0; i < arr1.length; i++){
        total += arr1[i]
    }
    for (let j = 0; j < arr2.length; j++){
        total += arr2[j]
    }
    return total;
}
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));

//arguments vers
function arrayPlusArray(arr1, arr2) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        for(let j = 0; j < arguments[i].length; j++){
            total += arguments[i][j]
        }
    }
    return total;
}
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));

//agak vancy vers
function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
}
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));

//one-liner lover
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));