const double = (num) => num * 2;

// console.log(process.argv);

// console.log(process.argv[1])

const [, , n] = process.argv;

console.log(double(n));

//process.argv =  2 elements 
// 1 element - execution path 
// 2 element - path of the js file

