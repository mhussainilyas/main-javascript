let num = 100;
let str = "Hussain";
let arr = ["Hussain", "Suleman", "Zaryab", "Ahmad"];

// isArray()
// Check whether the variable is an array or not (return T/F).
let result = Array.isArray(num);
// let result = Array.isArray(str);
// let result = Array.isArray(arr);
document.write(result + "<br>");

// Example Code
if (result) {
  document.write("This is an array.");
} else {
  document.write("This is not an array.");
}
