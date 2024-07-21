/**REDUCE */

/**
 * The reduce method in JavaScript is used to execute a reducer function on each element of the array, resulting in a single output value. It is a powerful array method for accumulating values,
 * such as summing up numbers or combining elements into a single object.
 * 
 * array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

 */

// sum max
const arr = [1, 2, 3];
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// console.log(findSum(arr)); //6

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

// acc-->sum
// curr-->arr[i]

// console.log(output); //6

/**REDUCE */
