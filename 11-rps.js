//2024 Coding Challenge with WPU
//day 11/366

//this is wild bro
const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    if (p1 === 'rock' && p2 === 'scissors'){
        return 'Player 1 won!';
        } else if(p1 === 'scissors' && p2 === 'paper' ){
            return 'Player 1 won!';
        } else if(p1 === 'paper' && p2 === 'rock'){
            return 'Player 1 won!';
        } else{
            return 'Player 2 won!';
        }
    }
console.log(rps('scissors', 'scissors'));

//tanpa else-if vers
const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')) {
        return 'Player 1 won!';
        } else{
            return 'Player 2 won!';
        }
    }
console.log(rps('rock', 'scissors'));

//menggunakan ternary
const rps = (p1, p2) => {
    return (p1 === p2) ? 'Draw!' : ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock'))
    ? 'Player 1 won!' : 'Player 2 won!';
};
console.log(rps('paper', 'paper'));

//one-liner lover
const rps = (p1, p2) => (p1 === p2) ? 'Draw!' : ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')) ? 'Player 1 won!' : 'Player 2 won!';
console.log(rps('paper', 'scissors'))

//key dan value vers
const rps = (p1, p2) => {
    const aturan = {
        rock : 'scissors',
        scissors : 'paper',
        paper : 'rock',
    };
    if (p1 === p2){
        return 'Draw!';
    } else{
        return `Player ${aturan[p1] === p2 ? '1' : '2'} won!`;
    }
}
console.log(rps('scissors', 'rock'));

// key dan value lebih vancy
const rps = (p1, p2) => {
    const aturan = {
        rock : 'scissors',
        scissors : 'paper',
        paper : 'rock',
    };
    return (p1 === p2) ? 'Draw!': `Player ${aturan[p1] === p2 ? '1' : '2'} won!`;
}
console.log(rps('scissors', 'rock'));


