//2024 Coding Challenge with WPU
//day 26/366
//https://www.codewars.com/kata/58649884a1659ed6cb000072

function updateLight(current) {
    if(current === 'green'){
        return 'yellow'
    }
    else if(current === 'yellow'){
        return 'red'
    }
    else{
        return 'green'
    }
}

//switch case vers
function updateLight(current) {
    switch(current){
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        case 'red':
            return 'green';
    }
}

//object.keys()
const traffic = {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
}
function updateLight(current){
    return traffic[current]
}

//object.keys lebih praktis vers
const updateLight = current => (
    {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
}) [current]

//ternary vers
function updateLight(current) {
    return (current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green')
}

//one-liner vers
const updateLight = current => (current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green')

console.log(updateLight('red'));