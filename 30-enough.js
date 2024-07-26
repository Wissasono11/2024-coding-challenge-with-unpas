//2024 Coding Challenge with WPU
//day 30/366
//https://www.codewars.com/kata/5875b200d520904a04000003

function enough(cap, on, wait) {
    if(cap >= on + wait){
      return 0;
    } else{
      return wait - (cap - on) 
    }
  }

//switch case
function enough(cap, on, wait){
    switch(true){
        case cap >= on + wait:
            return 0;
        case cap < on + wait:
            return wait - (cap - on)
    }
} 

//ternary vers
function enough(cap, on, wait) {
    return cap >= on + wait ? 0 : wait - (cap - on)
}

// Math.max vers
const enough = (cap, on, wait) => Math.max(wait + on - cap, 0)

//one-liner lover
const enough = (cap, on, wait) => cap >= on + wait ? 0 : wait - (cap - on)

console.log(enough(10, 10 ,0));