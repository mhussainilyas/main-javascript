// let arr = [100, 150, 200, 250, 300, 350];
let arr = [1, 2, 3, 4, 5, 6];

// reduce()
// The reduce() method in JavaScript is a powerful array method that executes a reducer function (that you provide) on each element of the array, as a result it return a single output value.

// Example 01
// let result = arr.reduce((accumulator, val) => {
//   return (accumulator += val);
// }, 0);
// document.write("Total: " + result);

// Example 02
let initialValue = 0;
let result = arr.reduce((accumulator, val) => {
  let pow = val * val;
  console.log(pow);
  return (accumulator += pow);
}, initialValue);
document.write("Total: " + result);
