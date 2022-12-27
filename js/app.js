//ES6
//REST & SPREAD OPERATOR
//EXAMPLE REST

//rest

function concatNumbers (a,b,c,...other) {
    console.log(arguments);
    return a+b+c;
} 

var sum = concatNumbers(1,2,3,4,5,6,7,8);

console.log(sum);

//spread

var names = ['badsha', 'hossain', 'babu'];

function getNames(name1,name2,name3) {
    console.log(name1,name2,name3);
}

console.log(names[0],names[1],names[2]);