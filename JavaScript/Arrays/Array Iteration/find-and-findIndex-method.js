let arrStr = ["Hussain", "Suleman", "Zaryab"];
let arrNum = [100, 200, 300, 400];

// find()
// return the first element of an array that pass the test.
// let result = arrStr.find((item) => {
//   return item === "Zaryab";
// });
// let result = arrNum.find((item) => {
//   return item > 200;
// });
// document.write(result + "<br>");

// findIndex()
// return the index of first element of an array that pass the test.
// let result = arrNum.findIndex((item) => {
//   return item > 200;
// });
let result = arrStr.findIndex((item) => {
  return item === "Zaryab";
});
document.write(result + "<br>");
