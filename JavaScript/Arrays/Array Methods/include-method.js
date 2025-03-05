let arrStr = ["Hussain", "Suleman", "Zaryab"];
let arrNum = [10, 20, 30];

// include()
// Check whether the array has a given element or not (return T/F).
// let result = arrStr.includes("Suleman");
// let result = arrStr.includes("Ahmad");
let result = arrNum.includes(30);
// let result = arrNum.includes(300);
document.write(result + "<br>");

// Example Code
if (result) {
  document.write("This element exist in array");
} else {
  document.write("This element doesn't exist in array");
}
