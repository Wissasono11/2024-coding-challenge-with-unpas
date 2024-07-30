// WPU Coding Challenge 2024
// 40/366
//https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

function switchItUp(number){
    switch(number){
        case 0:
            return 'Zero';
        case 1:
            return 'One'
        case 2:
            return 'Two'
        case 3:
            return 'Three'
        case 4:
            return 'Four'
        case 5:
            return 'Five'
        case 6:
            return 'Six'
        case 7:
            return 'Seven'
        case 8:
            return 'Eight'
        default:
            return 'Nine' 
    }
}

//if-else vers
function switchItUp(number){
    if(number === 0) return 'Zero'
    if(number === 1) return 'One'
    if(number === 2) return 'Two'
    if(number === 3) return 'Three'
    if(number === 4) return 'Four'
    if(number === 5) return 'Five'
    if(number === 6) return 'Six'
    if(number === 7) return 'Seven'
    if(number === 8) return 'Eight'
    else return 'Nine'
}

//ternary vers
function switchItUp(number){
    return number === 0 ? 'Zero' : number === 1 ? 'One' : number === 2 ? 'Two' : number === 3 ? 'Three' : number === 4 ? 'Four' : number === 5 ? 'Five' : number === 6 ? 'Six' : number === 7 ? 'Seven' : number === 8 ? 'Eight' : 9
}

//one-liner lover
const switchItUp = number => 
                             number === 0 
                                ? 'Zero' : 
                                    number === 1 
                                        ? 'One' : 
                                        number === 2 
                                            ? 'Two' : 
                                                number === 3 
                                                ? 'Three' : 
                                                    number === 4 
                                                        ? 'Four' : 
                                                            number === 5 
                                                                ? 'Five' : 
                                                                    number === 6 
                                                                        ? 'Six' : 
                                                                            number === 7 
                                                                                ? 'Seven' : 
                                                                                    number === 8 
                                                                                        ? 'Eight' : 
                                                                                                'Nine'


//dictionary vers
const switchItUp = number => {
    return{
        0 : 'Zero',
        1 : 'One', 
        2 : 'Two', 
        3 : 'Three',
        4 : 'Four',
        5 : 'Five',
        6 : 'Six',
        7 : 'Seven', 
        8 : 'Eight',
        9 : 'Nine'
    } [number]
}
console.log(switchItUp(1));