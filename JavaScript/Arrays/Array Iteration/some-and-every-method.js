let arrStr = ["Hussain"];
// let arrStr = ["Hussain", "Suleman", "Zaryab"];
let arrNum = [100, 200, 300];

// some()
// check if any of the element in an array pass the test or not. (return T/F)
// let result = arrNum.some((item) => {
//   return item >= 200;
// });
// let result = arrStr.some((item) => {
//   return item === "Ahmad";
// });
// document.write(result + "<br>");

// every()
// check if all the element in an array pass the test or not. (return T/F)
// let result = arrNum.every((item) => {
//   return item < 500;
// });
let result = arrStr.every((item) => {
  return item === "Hussain";
});
document.write(result + "<br>");