// WPU Coding Challenge 2024
// 39/366
// https://www.codewars.com/kata/58261acb22be6e2ed800003a

//class vers
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }

//class Kata using const  
const Kata = {
    getVolumeOfCuboid(length, width, height){
        return length && width && height > 0 ? length * width * height : 0
    }
}

//class Kata using if-else vers
const Kata = {
    getVolumeOfCuboid(length, width, height){
        if(length > 0 && width > 0 && height > 0){
            return length * width * height
        }
        else{
            return 0
        }
    }
}
console.log(Kata.getVolumeOfCuboid(1, 2, 2));

//function vers
function getVolumeOfCuboid(length, width, height){
    if(length > 0 && width > 0 && height > 0){
        return length * width * height
    }
    else{
        return 0
    }
}

//ternary vers
function getVolumeOfCuboid(length, width, height){
    return length && width && height > 0 ? ength * width * height : 0
}

const getVolumeOfCuboid = (length, width, height) => length && width && height > 0 ? length * width * height : 0

//one-liner lover
const getVolumeOfCuboid = (panjang, lebar, tinggi) => (panjang * lebar * tinggi)

console.log(getVolumeOfCuboid(1, 2, 2))