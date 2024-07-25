//2024 Coding Challenge with WPU
//day 27/366
//https://www.codewars.com/kata/58649884a1659ed6cb000072

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation){
 if(employed){
     if(vacation){
        return false;
    } else{
        return true;
    } 
  } else{
    if(vacation) {
        return false;
    } else{
        return false;
     }
  }   
}

//operator logic vers
function setAlarm(employed, vacation){
    return employed && !vacation
}

//employed > vacation vers
function setAlarm(employed, vacation){
    return (employed > vacation)
}
//one-liner lover 2.0
const setAlarm = (employed, vacation) => employed > vacation

//one-liner lover
const setAlarm = (employed, vacation) => employed && !vacation

console.log(setAlarm(true, false));