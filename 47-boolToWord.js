//day 47/366
//https://www.codewars.com/kata/53369039d7ab3ac506000467

function boolToWord(bool){
    if(bool === true){
        return 'Yes';
    }
    else{
        return 'No';
    }
}

//switch-case vers
function boolToWord(bool){
    switch(bool){
        case true:
            return 'Yes'
        case false:
            return 'No'
    }
}

//ternary vers
function boolToWord(bool){
    return bool ? 'Yes' : 'No'
}

//one-liner lover
const boolToWord = bool => bool ? 'Yes' : 'No'

console.log(boolToWord(true))