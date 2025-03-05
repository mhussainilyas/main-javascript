let arrStr = ["Hussain", "Suleman", "Zaryab", "Hussain"];
let arrNum = [1000, 2000, 3000, 4000, 5000, 3000];

// filter()
// return a new array filled with all the elements that pass the test.

// let result = arrStr.filter((elem) => {
//   return elem === "Hussain";
// });

let result = arrNum.filter((elem) => {
  return elem >= 2500;
});

document.write(result);