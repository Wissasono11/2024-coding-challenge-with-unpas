//2024 Coding Challenge with WPU
//day 18/366
//https://www.codewars.com/kata/5772da22b89313a4d50012f7

function greet (name, owner) {
    if(name === owner ){ return 'Hello boss'
    }else{ 
        return 'Hello guest'
    }
  };

//ternary vers
function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest' 
};

//one-liner lover 
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';

console.log(greet('Daniel', 'Daniel'));