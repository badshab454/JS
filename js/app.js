//ES6
//REST & SPREAD OPERATOR
//EXAMPLE REST

function concatNumbers (a,b,c,...other) {
    console.log(other[0]);
    return a+b+c;
} 

var sum = concatNumbers(1,2,3,4,5);

console.log(sum);