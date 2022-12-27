//ES6
//REST & SPREAD OPERATOR
//EXAMPLE REST

function concatNumbers (a,b,c,...other) {
    console.log(arguments);
    return a+b+c;
} 

var sum = concatNumbers(1,2,3,4,5,6,7,8);

console.log(sum);