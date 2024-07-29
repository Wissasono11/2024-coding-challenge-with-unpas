// WPU Coding Challenge 2024
// 37/366
//https://www.codewars.com/kata/515e188a311df01cba000003


function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
      case 2:
        name = 'Venus'
      case 3:
        name = 'Earth'
      case 4:
        name = 'Mars'
      case 5:
        name = 'Jupiter'
      case 6:
        name = 'Saturn'
      case 7:
        name = 'Uranus'
      default:
        name = 'Neptune'
    }
    return name;
}

//bar-bar kali tol
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break
      case 2:
        name = 'Venus'
        break
      case 3:
        name = 'Earth'
        break
      case 4:
        name = 'Mars'
        break
      case 5:
        name = 'Jupiter'
        break
      case 6:
        name = 'Saturn'
        break
      case 7:
        name = 'Uranus'
        break
      default:
        name = 'Neptune'
        break
    }
    return name;
  }

//else-if vers
function getPlanetName(id){
    if(id === 1) {
        return 'Mercury'
    } if(id === 2) {
        return 'Venus'
    } if(id === 3) {
        return 'Earth'
    } if(id === 4) {
        return 'Mars'
    } if(id === 5) {
        return 'Jupiter'
    } if(id === 6) {
        return 'Saturn'
    } if(id === 7) {
        return 'Uranus'
    } else {
        return 'Neptune'
    }
}

//ternary vers
function getPlanetName(id){
    return id === 1 ? 'Mercury' : id === 2 ? 'Venus' : id === 3 ? 'Earth' : id === 4 ? 'Mars' : id === 5 ? 'Jupiter' : id === 6 ? 'Saturn' : id === 7 ? 'Uranus' : 'Neptune'
}

//one-liner lover
const getPlanetName = id => id === 1 ? 'Mercury' : id === 2 ? 'Venus' : id === 3 ? 'Earth' : id === 4 ? 'Mars' : id === 5 ? 'Jupiter' : id === 6 ? 'Saturn' : id === 7 ? 'Uranus' : 'Neptune'

const getPlanetName = id => {
    return{
        1 : 'Mercury',
        2 : 'Venus',
        3 : 'Earth',
        4 : 'Mars', 
        5 : 'Jupiter',
        6 : 'Saturn',
        7 : 'Uranus',
        8 : 'Neptune'
    } [id]
}
console.log(getPlanetName(3));
