//2024 Coding Challenge with WPU
//day 5/366

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return fuelLeft * mpg >= distanceToPump;
// };

// console.log(zeroFuel(50, 25, 2));

//one-liner lover
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump;

// console.log(zeroFuel(50, 25, 2));

// const zeroFuel = (_,__,___) => ___*__ >= _

// console.log(zeroFuel(50, 25, 2));

//bro this is wild!
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(mpg * fuelLeft >= distanceToPump) return true; 
        else return false;
}
console.log(zeroFuel(100, 25, 1));
