//2024 Coding Challenge with WPU
//day 14/366

// Numerical Score	    Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	    'B'
// 70 <= score < 80	    'C'
// 60 <= score < 70	    'D'
// 0 <= score < 60	    'F'

function getGrade (s1, s2, s3) {
    const score = (s1 + s2 + s3) / 3 
    if(score <= 60) return 'F'
    else if(score < 70) return 'D'
    else if(score < 80) return 'C'
    else if(score < 90) return 'B'
    else{
        return 'A'
    }
  }
console.log(getGrade(95,80,80));

// reduce score
function getGrade (...s) {
    const score = s.reduce((acc, curr) => acc + curr) / s.length;

    if(score <= 60) return 'F'
    else if(score < 70) return 'D'
    else if(score < 80) return 'C'
    else if(score < 90) return 'B'
    else return 'A'
  }
console.log(getGrade(95,80,80));

// ternary vers
function getGrade(...s){
    const score = s.reduce((acc, curr) => acc + curr) / s.length;
    return score >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
}
console.log(getGrade(95, 89, 95))

// one-liner version
const getGrade = (...s) => ((score = s.reduce((acc, curr) => acc + curr) / s.length)) >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(getGrade(58,59,60));

