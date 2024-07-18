console.log("js insterted");

const a = [1, 2];
// a = [1, 2, 3];  can not assign const variable
a.push(3);
console.log({ a });

// console.log(b);  Can not access before initialiZation  [TDZ (Temporal dead zone), a variable exists but it cannot be accessed until it is not declared.]
let b = 10;

//Hoisting
// variable and function are hoisted top of its scope it means we can use the variable before declaration
