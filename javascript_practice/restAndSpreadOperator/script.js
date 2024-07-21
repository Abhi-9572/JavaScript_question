/**SPREAD */

/** 
The spread operator is used to spread the elements of an array or object into another array or object. 
It can also be used to copy an array or object.


var array1 = [10, 20, 30, 40, 50];
var array2 = [60, 70, 80, 90, 100];
var array3 = [...array1, ...array2];
console.log(array3); //[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

*/

/**SPREAD */

/**REST */

/**
The rest operator is used in function parameters to collect all remaining arguments into an array. 
It allows a function to accept an indefinite number of arguments.

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(5, 10, 15, 20)); // Output: 50

*/

/**REST */
