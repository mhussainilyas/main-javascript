// Usually it works with arrays and strings.
// ================
//   With Arrays
// ================
let arr = ["Hussain", "Suleman", "Zaryab", "Faizan"];
let arr_num = [10, 20, 30, 40, 50];

for (let val of arr_num) {
  document.write(val + "<br>");
}

for (let val of arr) {
  document.write(val + "<br>");
}

// ================
//   With Strings
// ================
let str = "Muhammad Hussain";
for(let char of str) {
    document.write(char + ", ");
}